// Repository interface that provides CRUD database operations via Spring Data JPA.
package survey.example.project.repository;

import survey.example.project.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
}
