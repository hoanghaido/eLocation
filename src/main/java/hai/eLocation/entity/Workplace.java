package hai.eLocation.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity()
@Table(name = "workplaces")

public class Workplace implements Comparable<Workplace> {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 
	 @Column(name = "floor")
	 @NotBlank(message = "Floor is mandatory")
	 	private String floor;
	 
	 @Column(name = "location")
	 @NotBlank(message = "Location is mandatory")
	 	private String location;
	 
	 @Column(name = "flex")
	 	private boolean flex;
	 
	 @Column(name = "occupied")
	 	private boolean occupied;
	 
	 @Column(name = "xCoord")
	 	private String xCoord;

	 @Column(name = "yCoord")
	 	private String yCoord;
	 
	 @JsonBackReference
	 @OneToOne(mappedBy = "workplace")
		private Employee employee;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFloor() {
		return floor;
	}

	public void setFloor(String floor) {
		this.floor = floor;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public boolean isFlex() {
		return flex;
	}

	public void setFlex(boolean flex) {
		this.flex = flex;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public boolean isOccupied() {
		return occupied;
	}

	public void setOccupied(boolean occupied) {
		this.occupied = occupied;
	}

	public String getxCoord() {
		return xCoord;
	}

	public void setxCoord(String xCoord) {
		this.xCoord = xCoord;
	}

	public String getyCoord() {
		return yCoord;
	}

	public void setyCoord(String yCoord) {
		this.yCoord = yCoord;
	}

	@Override
	public int compareTo(Workplace o) {
		return (int) (this.getId() - o.getId());
	}
}
