import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DemandPeople } from './DemandPeople';
import { MyBaseEntity } from './MyBaseEntity';

@Entity()
export class Demand extends MyBaseEntity {

  @PrimaryGeneratedColumn({name: 'id'})
  demandId: number;

  @Column({name: 'demand_name', nullable: true, default: ''})
  demandName: string;

  @Column({name: 'wiki_url', nullable: true, default: ''})
  wikiUrl: string;

  // 1大需求，3中等，5小需求
  @Column({name: 'level', default: 3})
  level: number;

  // 0非加急，1加急的
  @Column({name: 'urgent', default: 0})
  urgent: number;

  // 10 未评审，20已评审，30开发中，40测试中，50已上线
  @Column({name: 'status', default: 10})
  status: number;

  @Column({name: 'create_date', nullable: true, default: ''})
  createDate: string;

  @Column({name: 'review_date', nullable: true, default: ''})
  reviewDate: string;

  @Column({name: 'plan_online_date', nullable: true, default: ''})
  planOnlineDate: string;

  @Column({name: 'online_date', nullable: true, default: ''})
  onlineDate: string;

  @Column({name: 'comment', nullable: true, default: ''})
  comment: string;

  @OneToMany(() => DemandPeople, demandPeople => demandPeople.demand)
  demandPeople: DemandPeople[];
}
