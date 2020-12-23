import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../services/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

	message: string="";

  constructor(private suppliersService: SuppliersService) { }

  ngOnInit(): void {
		this.message = this.suppliersService.getSuppliers();
  }

}
