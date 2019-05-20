import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';

import { ApiService } from '../../../../api/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(private router: Router, private api: ApiService) {
  }

  ngOnInit(): void { }

  onDataUser(value) {
    this.api.addUser(value).subscribe(() => {
      this.router.navigate(['/users']);
    })
  }
}
