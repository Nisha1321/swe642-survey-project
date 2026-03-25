// This class maps the student survey data to the MySQL database table using JPA/Hibernate.
package survey.example.project.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "surveys")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank private String firstName;
    @NotBlank private String lastName;
    @NotBlank private String streetAddress;
    @NotBlank private String city;
    @NotBlank private String state;
    @NotBlank private String zip;
    @NotBlank private String telephoneNumber;
    @NotBlank @Email private String email;
    @NotBlank private String dateOfSurvey;

    private String campusFeatures;

    @NotBlank private String interestSource;
    @NotBlank private String recommendationLikelihood;
    private String additionalComments;

    // ── Getters & Setters ──────────────────────────────────────────

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getStreetAddress() { return streetAddress; }
    public void setStreetAddress(String streetAddress) { this.streetAddress = streetAddress; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getZip() { return zip; }
    public void setZip(String zip) { this.zip = zip; }

    public String getTelephoneNumber() { return telephoneNumber; }
    public void setTelephoneNumber(String telephoneNumber) { this.telephoneNumber = telephoneNumber; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getDateOfSurvey() { return dateOfSurvey; }
    public void setDateOfSurvey(String dateOfSurvey) { this.dateOfSurvey = dateOfSurvey; }

    public String getCampusFeatures() { return campusFeatures; }
    public void setCampusFeatures(String campusFeatures) { this.campusFeatures = campusFeatures; }

    public String getInterestSource() { return interestSource; }
    public void setInterestSource(String interestSource) { this.interestSource = interestSource; }

    public String getRecommendationLikelihood() { return recommendationLikelihood; }
    public void setRecommendationLikelihood(String v) { this.recommendationLikelihood = v; }

    public String getAdditionalComments() { return additionalComments; }
    public void setAdditionalComments(String additionalComments) { this.additionalComments = additionalComments; }
}
