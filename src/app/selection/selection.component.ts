import { Component, OnInit } from '@angular/core';
import { Agent } from '../../modele/Agent';
import { SGSSService } from './../sgss.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  agents:Agent[];
  agentSelectionne:Agent;

  constructor(private serviceSGSS:SGSSService) {
    
  }

  ngOnInit(): void {
    this.serviceSGSS.recupererAgents().subscribe( ags => this.agents = ags);
  }

  surSelect(id:number)
  {
    for(let ag of this.agents)
    {
      if(ag.id == id)
      {
        this.agentSelectionne = ag;
        break;
      }
    }
  }

}
