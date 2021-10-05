import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DataService } from '../../data.service';
interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  constructor(private _data: DataService) { }

  public years: Number[] = [];
  public makes: Object[] = [];
  public models: Object[] = [];
  public trims: Object[] = [];

  public cars: Object[] = [{}, {}, {}, {}, {}];
  public number: Number[] = [0]
  public selectedYear;
  public selectedMake;
  public selectedModel;
  public selectedTrim = "";
  ngOnInit() {
    this.getYears();
  }
  getYears() {

    this._data.doGETYears().subscribe(
      data => {
        let max = parseInt(data["Years"].max_year);
        let min = parseInt(data["Years"].min_year);

        for (let i = max; i >= min; i--)
          this.years.push(i)
      },
      err => console.error(err),
      () => console.log('done loading years', this.years)
    );
  }
  onChangeYear(value, event) {
    if (event.isUserInput) {
      this.selectedYear = value;
      this._data.doGETMakes(value).subscribe(
        data => {
          this.makes = data["Makes"];
        },
        err => console.error(err),
        () => console.log('done loading makes', this.makes)
      );
    }

  }

  onChangeMake(value, id, event) {
    if (event.isUserInput) {
      this.selectedMake = id;

      this._data.doGETModels(value, this.selectedYear).subscribe(
        data => {
          this.models = data["Models"];
        },
        err => console.error(err),
        () => console.log('done loading models', this.models)
      );
    }

  }

  onChangeModel(value, event) {
    if (event.isUserInput) {
      this.selectedModel = value;
      this._data.doGETTrims(value, this.selectedMake, this.selectedYear).subscribe(
        data => {
          this.trims = data["Trims"];
        },
        err => console.error(err),
        () => console.log('done loading trims', this.trims)
      );
    }

  }
  onChangeTrim(value, event) {
    if (event.isUserInput) {
      this.selectedTrim = value;
    }

  }




  addCar(num) {

    this._data.doGETModel(this.selectedTrim).subscribe(
      data => {
        this.cars[num] = data
      },
      err => console.error(err),
      () => {

        this.makes = [];
        this.models = [];
        this.trims = [];

        this.selectedYear = ""
        this.selectedMake = ""
        this.selectedModel = ""
        this.selectedTrim = ""

        if (this.number.length < 5)
          this.number.push(this.number.length)

        console.log('done loading car', this.cars)
      }


    );

  }


}
