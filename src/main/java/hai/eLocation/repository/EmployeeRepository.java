package hai.eLocation.repository;

import org.springframework.data.repository.CrudRepository;

import hai.eLocation.entity.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
