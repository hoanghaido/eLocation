package hai.eLocation.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity()
@Table(name = "employee")
public class Employee {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 
	 @Column(name = "name")
	    @NotBlank(message = "Name is mandatory")
	    private String name;
	 
	 @Column(name = "location")
	 	private String location;
	 
	 @Column(name = "floor")
	 	private String floor;
	 
	 @Column(name = "xCoord")
	 	private String xCoord;

	 @Column(name = "yCoord")
	 	private String yCoord;

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

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getFloor() {
		return floor;
	}

	public void setFloor(String floor) {
		this.floor = floor;
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

}
