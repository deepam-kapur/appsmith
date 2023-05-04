package com.appsmith.server.repositories;

import com.appsmith.server.repositories.ce.DatasourceConfigurationStructureRepositoryCE;
import org.springframework.stereotype.Repository;

@Repository
public interface DatasourceConfigurationStructureRepository extends DatasourceConfigurationStructureRepositoryCE, CustomDatasourceConfigurationStructureRepository {
}
