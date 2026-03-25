// Survey form component supporting both creating and editing a survey.
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SurveyService } from '../services/survey.service';

@Component({
    selector: 'app-survey-form',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './survey-form.component.html'
})
export class SurveyFormComponent implements OnInit {
    surveyForm!: FormGroup;
    isEditMode = false;
    surveyId?: number;
    submitted = false;

    campusOptions = ['students', 'location', 'campus', 'atmosphere', 'dorm rooms', 'sports'];
    selectedFeatures: string[] = [];

    constructor(
        private fb: FormBuilder,
        private surveyService: SurveyService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.surveyForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            streetAddress: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required],
            telephoneNumber: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            dateOfSurvey: ['', Validators.required],
            interestSource: ['', Validators.required],
            recommendationLikelihood: ['', Validators.required],
            additionalComments: ['']
        });

        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode = true;
            this.surveyId = +id;
            this.surveyService.getById(this.surveyId).subscribe(data => {
                this.surveyForm.patchValue(data);
                this.selectedFeatures = data.campusFeatures ? data.campusFeatures.split(',') : [];
            });
        }
    }

    onCheckboxChange(feature: string, event: Event): void {
        const checked = (event.target as HTMLInputElement).checked;
        if (checked) {
            this.selectedFeatures.push(feature);
        } else {
            this.selectedFeatures = this.selectedFeatures.filter(f => f !== feature);
        }
    }

    onSubmit(): void {
        this.submitted = true;
        if (this.surveyForm.invalid) return;

        const survey = { ...this.surveyForm.value, campusFeatures: this.selectedFeatures.join(',') };

        if (this.isEditMode && this.surveyId) {
            this.surveyService.update(this.surveyId, survey).subscribe(() => {
                alert('Survey updated successfully!');
                this.router.navigate(['/surveys']);
            });
        } else {
            this.surveyService.create(survey).subscribe(() => {
                alert('Thank you! Your survey has been submitted.');
                this.router.navigate(['/surveys']);
            });
        }
    }

    onCancel(): void {
        this.router.navigate(['/']);
    }
}
