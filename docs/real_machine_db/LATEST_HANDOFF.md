更新日: 2026-09-09

## 現在地点
- recordCount: **1046**
- latestRecordAdded: **GⅠ優駿倶楽部**（KPE）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-02-06_g1-yushun-club.md`
- chronologicalFrontier: **2017-02-06**
- frontierLatestMachine: **GⅠ優駿倶楽部 — No.1046**
- schema: **resetBehavior v0.7**
- status: **2017-02-06_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1044実レコードを再取得して開始。
- 開始時正本は **1044件 / chronologicalFrontier 2017-02-06 / 2/6群OPEN**。旧INDEXは19件時点の旧集約なので進捗正本にせず、README規定どおりLATEST_HANDOFFと実レコードを優先。
- 次候補オリンピア **「JAWS ～it's a SHARK PANIC～」** を性能コア＋resetBehavior v0.7で調査。書き込み直前に並行更新でNo.1045がmainへ作成済みになったため重複追加せず再取得照合し、その内容を正本採用。
- 続けて **KPE「GⅠ優駿倶楽部」** をNo.1046として新規登録。
- 遡及QAは既に更新済みの `2006-03-27_kengou-musashi.md` を確認して通過し、次の `2006-04-16_oniwa-de-don.md` を再探索。性能側PARTIALは維持し、reset QAのみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。

## No.1045 — JAWS ～it's a SHARK PANIC～
- manufacturer: **オリンピア**
- releaseDate: **2017-02-06**
- formalModelName: **JAWS/J5**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- system: **A+ART / 周期CZ搭載**
- 機械割: **97.1 / 98.5 / 100.2 / 104.3 / 107.0 / 112.1%**。
- ボーナス合算: **1/119.2 → 1/99.9**。
- ART初当たり: **1/445.3 → 1/247.7**。
- 約**31G/50枚**、ARTはボーナス込み約**1.9枚/G**、1セット50G。
- 設定変更: 天井周期数RESET、周期間G数CARRYOVER、スルー天井規定/内部モード/内部状態再抽選。
- 設定変更後モード: **E 10.2% / F 89.8%**。E最大3回、F最大7回。
- 純電源OFF→ON: 天井周期数・周期間G数・スルー規定・モード・状態CARRYOVER。
- ガックン判別不可。朝一CZ到達Gだけでも設定変更判別不可。
- 主出典: P-WORLD / グリーンべると / 期待値見える化 / 2-9伝説 / ちょんぼりすた。

## No.1046 — GⅠ優駿倶楽部
- manufacturer: **KPE**
- releaseDate: **2017-02-06**
- formalModelName / certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- system: **ART / 周期育成・CZ搭載**
- 機械割: **97.8 / 98.4 / 99.6 / 103.4 / 105.5 / 110.2%**。
- ART初当たり: **1/348.8 / 342.2 / 324.1 / 296.4 / 283.1 / 266.7**。
- 公表代表ベース約**32G/50枚**。MB込み期待値計算資料の約46.5Gは定義差として分離。
- ART「GⅠロード」: 約**2.0枚/G**、1セット30G+α、初期30～300G+α。
- 通常天井: **999G以降の新馬戦チャレンジでART確定**。
- 設定変更: 天井/周期RESET、次回ARTシナリオ・スケジュールモード・競走馬再抽選。
- 据え置き/純電源OFF→ON: 天井・周期・ARTシナリオ・スケジュールモードCARRYOVER。競走馬は朝一再抽選。
- 朝一は設定変更・純電断とも温泉ゾーン表示のため単独判別不可。据え置き時は見た目のみの温泉ゾーン。
- シンボリクリスエス選択による333G/555G等の天井短縮は主役馬依存で、設定変更専用短縮とは分離。
- 主出典: K-Navi / P-WORLD / 一撃 / ちょんぼりすた / 期待値見える化 / 当時解析。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04-16_oniwa-de-don.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- `2006-03-27_kengou-musashi.md` は既に `PARTIAL_RESEARCH_EXHAUSTED` のため再更新せず通過。
- `2006-04-16_oniwa-de-don.md` は「お庭deドン/オニワデドン/お祭りタイム」と設定変更・据え置き・電源OFF ON・RTを組み替えて再探索したが、本機固有のRT残G/内部状態処理・変更判別の直接根拠は追加固定できず、性能側PARTIALを維持したままreset QAだけ `PARTIAL_RESEARCH_EXHAUSTED` に更新。

## 境界監査
- **2017-02-06_GROUP_OPEN**。
- 登録済み:
  - パチスロ牙狼-守りし者- — No.1044
  - JAWS ～it's a SHARK PANIC～ — No.1045
  - GⅠ優駿倶楽部 — No.1046
- 同日未処理確認候補:
  - **パチスロおそ松さん**（D-light）
  - **ジャックポットトロピカルバージョン2**
  - **パチスロ攻殻機動隊S.A.C. 2nd GIG**（導入日要再照合）
  - **パチスロ機動戦士Zガンダム**（導入日要再照合）
- K-Naviに2/6掲載のマジンガーZは複数資料2/20と競合するため、2/6群では保留し2/20群で正式処理。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1045 / No.1046 を再取得。
2. **1046件 / chronologicalFrontier 2017-02-06 / 2/6群OPEN** を正本として継続。
3. 次の未処理機種は **D-light「パチスロおそ松さん」** をNo.1047候補として処理。
4. その後ジャックポットトロピカルバージョン2 → 攻殻機動隊S.A.C. 2nd GIG / 機動戦士Zガンダムの導入日を再監査し、2/6群CLOSED可否を判定。
5. 遡及QAは `2006-04_bomberman-victory-f.md` を次カーソルとして、性能側statusを不用意に崩さずresetBehavior欠損だけを順次補完。

## 主要出典 — 取得日 2026-09-09
### JAWS
- https://www.p-world.co.jp/machine/database/8237
- https://slotjin.com/zone/jaws/
- https://2-9densetsu.com/jaws/
- https://2-9densetsu.com/jaws-mode/
- https://chonborista.com/slot/orinpia-slot/29830/

### GⅠ優駿倶楽部
- https://p-kn.com/slot/2677/
- https://www.p-world.co.jp/machine/database/8235
- https://1geki.jp/slot/s_derbykurabu/
- https://chonborista.com/slot/kpe-slot/29777/
- https://slotjin.com/zone/g1-dclub/

### 遡及QA お庭でドン
- https://web-greenbelt.jp/00004571/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/45/a.php
