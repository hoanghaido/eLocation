package hai.eLocation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hai.eLocation.entity.Workplace;

@Repository
public interface WorkplaceRepository extends JpaRepository<Workplace, Long> {
	public Optional<Workplace> findByLocation(String location);
}
