# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **824**
- latestRecordAdded: **戦国乙女～剣戟に舞う白き剣聖～西国参戦編**（オリンピア）— 2014-06-02
- latestRecord: `docs/real_machine_db/machines/2014-06-02_sengoku-otome-saigoku-sansen.md`
- chronologicalFrontier: **2014-06-02**
- frontierLatestMachine: **戦国乙女～剣戟に舞う白き剣聖～西国参戦編**
- schema: **resetBehavior v0.7**
- status: **2014-06-02_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、823件目 `2014-06-02_kerot3.md` を再読。
- INDEXは19件表記の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として継続。
- 作業開始時の正本は **823件 / 2014-06-02 / 06-02_GROUP_OPEN**。
- 2014-06-02同日群を `2014年6月2日 / 2014-06-02 / パチスロ / 導入` 等で再監査。今回具体日を安全に固定できた本線は **ケロット3 / 戦国乙女 西国参戦編 / 餓狼伝説PREMIUM**。蒼天の拳2は06-16のため分離維持。
- 戦国乙女 西国参戦編が未登録であることを確認し、824件目として追加。

## 今回追加 — 戦国乙女～剣戟に舞う白き剣聖～西国参戦編

### identity / 性能コア

- manufacturer: **オリンピア**。
- formalModelName: **戦国乙女剣戟に舞う白き剣聖西国参戦編L2**。
- inspectionNumber: **4S0175**。
- hall start: **2014-06-02**。
- generation/system: **5号機 / ART特化 / 周期抽選 + CZ + 直撃ART**。
- payout: **96.5 / 98.1 / 100.6 / 103.9 / 107.2 / 113.4%**。
- ART初当たり: **1/255.9 / 242.7 / 230.1 / 209.3 / 187.5 / 162.8**。
- baseGamesPer50: **約31G/50枚**。複数解析・導入直後実戦で整合。
- ART「強カワRUSH」: **純増約2.0枚/G、初回最低45G～**。セット継続時40G開始の解析あり。
- 乙女ボーナス: **約60枚**。出陣の刻: **9G・約63枚**。
- ceiling: **ART間1059G → 白7乙女ボーナス + ART**、**乙女くじ20周期 → プレミアム乙女アタック**。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- settingChangeBehavior: **ART間1059G天井・周期回数RESET**。初回周期残りGは **10～100Gで再抽選**。
- carryOverBehavior: 据え置き/電断時の **内部周期残りG CARRYOVER** を当時解析で確認。ART間1059GはK-Navi後年実戦の宵越し計算が引継ぎを支持するが、メーカー直接契約ではないため `PERIOD_OBSERVATIONAL_SUPPORT`。
- powerCycleBehavior: 設定変更なし電源OFF→ONでは **乙女くじ表示は100へ戻るが、内部周期残りGは引継ぎ**。ART間1059Gの純電断直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 設定変更は **RESET**。据え置きの周期内部Gは **CARRYOVER**。ART間G据え置きは観測支持。
- ceilingAfterReset: 1059Gより短い専用G天井は **NONE_CONFIRMED_AFTER_RESEARCH**。ただし初回周期は10～100G再抽選。
- modeAfterReset: 天国A/B等の規定G解除モードは主要構造でない。設定変更専用長期モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- stateAfterReset: 高確/低確等の設定変更・据え置き・純電断契約は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 初回周期残り10～100G再抽選。新台初日311件集計で **1～50G初当たり23件 = 7.4%**、51～100Gはやや高めという当時観測。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 電源OFFだけでも液晶周期表示が100へ戻るため **表示単独判別不可**。前日残り周期と翌朝の最低減算量を比較すれば、条件次第で変更確定となるケースあり。ガックンは `NONE_CONFIRMED_AFTER_RESEARCH`。
- publicMorningNumbers: **10～100G（初回周期再抽選範囲） / 1～50G 7.4%（23/311、実践値）**。
- resetBehaviorQA: **PARTIAL**。

## 再探索 / safeguards

- `戦国乙女 西国 / 戦国乙女2西国 / 戦国乙女～剣戟に舞う白き剣聖～西国参戦編 / 戦国乙女剣戟に舞う白き剣聖西国参戦編L2 / 4S0175 / オリンピア` に `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 周期 / 乙女くじ / ガックン / 50枚 / 1000円` を組み合わせて再探索。
- K-Navi、HAZUSE、パチマガスロマガ、パチスロ立ち回り講座、2014年当時の期待値見える化、パチ7回顧を横断。
- 前作、2016年「戦国乙女2 深淵に輝く気高き将星」、2023年スマスロ戦国乙女4等のリセット値を本機へ混入しない。
- 純電断時ART間1059G、通常内部状態、周期回数の完全保持契約は十分な再探索後も直接固定できず推測しない。

## 2014-06-02群 / 次候補

具体日確認済み:
1. **ケロット3**（山佐）— No.823 / 処理済み
2. **戦国乙女～剣戟に舞う白き剣聖～西国参戦編**（オリンピア）— No.824 / 処理済み
3. **餓狼伝説PREMIUM**（SNKプレイモア）— 未処理

- 2014-06-02群は **OPEN**。
- 同日再監査で今回これ以外の安全な具体日付き未登録5号機は固定できなかったが、**餓狼伝説PREMIUM処理後にもう一度全メーカー横断監査してからCLOSED判定**する。
- **蒼天の拳2は2014-06-16**として分離維持。

## 遡及 resetBehavior QA

- QAカーソルは維持。
- 次QAカーソル: `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`。

## 次回再開地点

1. **recordCount 824 / chronologicalFrontier 2014-06-02 / 06-02_GROUP_OPEN** から開始。
2. 最新mainでREADME / mission / INDEX / LATEST_HANDOFF / 824件目レコードを再確認。
3. **餓狼伝説PREMIUM（SNKプレイモア）**を現時点のNo.825候補として処理。
4. 性能コアに加えて v0.7 resetBehavior（設定変更/据え置き/純電断、天井、モード/状態、朝一数値・変更判別）を同時収集。
5. 餓狼伝説PREMIUM処理後、2014-06-02同日群を全メーカー横断で最終監査しCLOSED判定。
6. 群CLOSED後は06-03以降を時系列前進。
7. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md` から再開。
8. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### 戦国乙女 西国参戦編
- K-Navi: `https://p-kn.com/slot/2059/`
- K-Navi ART初当たり詳細: `https://p-kn.com/slot/2059/49606/`
- K-Navi ボーナス＆ART: `https://p-kn.com/slot/2059/49508/`
- K-Navi 強カワRUSH: `https://p-kn.com/slot/2059/49500/`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0175/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/115/a.php`
- パチスロ立ち回り講座: `https://crankyseven.com/sengokuotome-saigoku-pc.htm`
- 期待値見える化（2014-06-10朝一解析）: `https://slotjin.com/slot/sengokuotome2-morning/`
- パチ7回顧: `https://pachiseven.jp/articles/detail/11187`
- ぱちんこドキュメント: `https://pachinkolist.com/archives/39159335.html`

### 次候補 / 同日群
- HAZUSE 餓狼伝説PREMIUM: `https://hazuse.com/machine/pachislot/4S0203/`
- パチ＆スロ必勝本 餓狼伝説PREMIUM: `https://p.hisshobon.jp/machine/2406/1/46189`
