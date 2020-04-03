package hai.eLocation.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hai.eLocation.entity.Employee;
import hai.eLocation.entity.Workplace;
import hai.eLocation.repository.WorkplaceRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/workplace")
public class WorkplaceController {
	
	@Autowired
	WorkplaceRepository workplaceRepository;
	
	@GetMapping("/list")
	public List<Workplace> getAllWorkplaces() {
		List<Workplace> workplacesList = (List<Workplace>) workplaceRepository.findAll();
		Collections.sort(workplacesList);
        return workplacesList;
	}
	
	@GetMapping("/listEmp")
	public List<Employee> getAllEmpWorkplaces() {
		List<Workplace> workplacesList = (List<Workplace>) workplaceRepository.findAll();
		List<Employee> emp = new ArrayList<Employee>();
		for (Workplace wp:workplacesList) {
			  emp.add(wp.getEmployee());
		}
        return emp;
	}

}
