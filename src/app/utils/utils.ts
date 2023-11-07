import {MatTableDataSource} from "@angular/material/table";

export default class Utils {

  static applyFilter<Type>(event: Event, dataSource: MatTableDataSource<Type>) {
    const filterValue = (event.target as HTMLInputElement).value;
    dataSource.filter = filterValue.trim().toLowerCase();
  }
}
