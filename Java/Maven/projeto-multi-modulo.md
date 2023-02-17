# Projetos Multi-módulos

Inserir no pom.xml: `<packaging>pom</packaging>`

```
mvn archetype:generate -DgroupId=one.digital.innovation -DartifactId=project-parent -Darchetype=maven-quick-start

mvn archetype:generate -DgroupId=one.digital.innovation -DartifactId=core -Darchetype=maven-quick-start -DinteractiveMode=false

mvn archetype:generate -DgroupId=one.digital.innovation -DartifactId=service -Darchetype=maven-quick-start -DinteractiveMode=false

mvn archetype:generate -DgroupId=one.digital.innovation -DartifactId=controller -Darchetype=maven-quick-start -DinteractiveMode=false
```
