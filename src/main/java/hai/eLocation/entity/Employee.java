package hai.eLocation.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity()
@Table(name = "employees")
public class Employee {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 
	 @Column(name = "name")
	    @NotBlank(message = "Name is mandatory")
	    private String name;
	 
	 @JsonManagedReference
	 @OneToOne(cascade = CascadeType.PERSIST)
		@JoinTable(	name = "employee_workplace", 
		joinColumns = @JoinColumn(name = "emp_id"), 
		inverseJoinColumns = @JoinColumn(name = "wp_id"))
	 private Workplace workplace;
	 
	 @Column(name = "flexWorkplace")
	 private boolean flexWorkplace;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Workplace getWorkplace() {
		return workplace;
	}

	public void setWorkplace(Workplace workplace) {
		this.workplace = workplace;
		if (workplace != null) {
			workplace.setEmployee(this);
			workplace.setOccupied(true);
		}
	}
	
	public void removeWorkplace() {
		if (this.getWorkplace() != null) {
			this.getWorkplace().setOccupied(false);
			this.getWorkplace().setEmployee(null);
			this.setWorkplace(null);
		}
	}

	public boolean isFlexWorkplace() {
		return flexWorkplace;
	}

	public void setFlexWorkplace(boolean flexWorkplace) {
		this.flexWorkplace = flexWorkplace;
	}


}
