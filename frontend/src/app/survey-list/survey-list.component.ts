// Component that fetches and displays all surveys with edit and delete options.
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../models/survey.model';

@Component({
    selector: 'app-survey-list',
    standalone: true,
    imports: [CommonModule, RouterLink, NgStyle],
    templateUrl: './survey-list.component.html'
})
export class SurveyListComponent implements OnInit {
    surveys: Survey[] = [];

    constructor(private surveyService: SurveyService) { }

    ngOnInit(): void {
        this.loadSurveys();
    }

    loadSurveys(): void {
        this.surveyService.getAll().subscribe(data => this.surveys = data);
    }

    deleteSurvey(id: number): void {
        if (confirm('Are you sure you want to delete this survey?')) {
            this.surveyService.delete(id).subscribe(() => this.loadSurveys());
        }
    }
}
