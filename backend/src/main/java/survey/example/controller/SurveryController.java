// REST controller exposing CRUD endpoints for the student survey resource.
package survey.example.project.controller;

import survey.example.project.model.Survey;
import survey.example.project.repository.SurveyRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/surveys")
@CrossOrigin(origins = "http://localhost:4200")
public class SurveyController {

    @Autowired
    private SurveyRepository repo;

    @GetMapping
    public List<Survey> getAll() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Survey> getById(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Survey create(@Valid @RequestBody Survey survey) {
        return repo.save(survey);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Survey> update(@PathVariable Long id,
                                          @Valid @RequestBody Survey updated) {
        return repo.findById(id).map(existing -> {
            updated.setId(id);
            return ResponseEntity.ok(repo.save(updated));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
