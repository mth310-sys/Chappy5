更新日: 2026-09-08

## 現在地点
- recordCount: **1025**
- latestRecordAdded: **SLOTバジリスク～甲賀忍法帖～Ⅲ**（エレコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-11-28_slot-basilisk-kouga-ninpouchou-3.md`
- chronologicalFrontier: **2016-11-28**
- frontierLatestMachine: **SLOTバジリスク～甲賀忍法帖～Ⅲ — No.1025**
- schema: **resetBehavior v0.7**
- status: **2016-11-15_TO_2016-11-27_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-11-28_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1024実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として使用。
- handoff正本 **1024件 / chronologicalFrontier 2016-11-14 / 11/14群CLOSED** から継続。
- 2016-11-15〜11-27境界をHAZUSE新台カレンダー、ALL7 11月一覧、個別メーカー/業界資料で監査。HAZUSEは2016年11月のパチスロ導入日を **11/07・11/14・11/28** としており、11/15〜27に新たな全国導入本線を確認できなかったため境界CLOSED。
- 直前handoffの先行候補だった `SLOTスターオーシャン4` / `パチスロ牙狼 -守りし者-` の11/21表記は後年設置期限一覧由来の誤誘導と判定。スターオーシャン4は2016-11-29発表会、牙狼は2016-11-18時点の業界記事で2017-02-05納品予定と確認できるため11/21群へ登録しない。
- ALL7に2016-11-25表記の `ヱヴァンゲリヲン～いま、目覚めの時～` があるが、これはビスティの**パチンコ機**でSANKYO公式も2016.12導入のパチンコとして掲載。パチスロ本線へ混入させない。
- 次の実パチスロ導入日を2016-11-28へ前進し、先頭のエレコ `SLOTバジリスク～甲賀忍法帖～Ⅲ` をNo.1025として追加。

## No.1025 — SLOTバジリスク～甲賀忍法帖～Ⅲ
- manufacturer: **エレコ / ユニバーサルエンターテインメント**
- releaseDate canonical: **2016-11-28**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / A+ART / 周期CZ / 自力継続型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.5 / 99.8 / 102.0 / 104.0 / 107.1 / 110.1%**。
- 通常BC(黄/青BAR): **1/1024.0 / 993.0 / 963.8 / 936.2 / 910.2 / 840.2**。
- PBC(白BAR): **1/32768.0**（全設定）。
- ART初当たり: **1/376.8 / 363.0 / 356.9 / 312.1 / 316.2 / 256.2**。
- ボーナス+ART合成: **1/273.1 / 263.7 / 258.4 / 232.4 / 233.0 / 195.2**。
- ベース: **約37.6G/50枚**。
- ART純増: **約1.7枚/G**。ボーナス込み約2.0枚/G表記は定義を分離。
- BC平均約200枚、PBC 204枚掲載資料あり。ART1セット平均約35G。
- 通常天井: **ART間1200GでCZ+ART**。通常BCを挟んでも天井G数はリセットされない。

### resetBehavior v0.7
- 設定変更: ART間天井RESET、内部状態RESET/再抽選、RT状態RESET、液晶は甲賀卍谷。
- 据え置き / 純電源OFF→ON: 天井・内部状態・RT状態をCARRYOVER。液晶は甲賀卍谷。
- 設定変更専用の固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 周期モード1〜3は存在するが、設定変更時の初期周期モード具体振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更直後の通常/高確具体振り分けも `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 変更判別: ガックン報告あり。ただしメーカー保証ではないため `GACKUN_REPORTED_NOT_MANUFACTURER_GUARANTEE`。
- RT状態を利用し、ベルこぼし前の中段リプレイ=リセット濃厚 / 上段リプレイ=据え置き濃厚とする解析あり。確定契約ではなく判別材料として保存。
- 設定変更/通常電源OFF ONだけでは液晶遊技履歴はクリアされないとする解析あり。

### definitions / quality
- パチマガスロマガの通常BC系列と、ちょんぼりすた等のPBC込み総ボーナス系列は定義差。平均化せず分離して保存。
- ART純増1.7枚/Gとボーナス込み2.0枚/Gも定義差として分離。
- 型式名/検定番号は機種名・バジリスク3・ELECO・6S・型式・検定番号等へ検索語を変えたが直接固定できず、推測せずUNVERIFIED。

## 2016-11-28群 — OPEN
確定候補:
- **SLOTバジリスク～甲賀忍法帖～Ⅲ**（エレコ）— No.1025 登録済み
- **パチスロ火曜サスペンス劇場**（タイヨーエレック）— Sammy公式マイスロが2016-11-28をホール導入日と明記。次未処理候補。

要再監査:
- ALL7 11月一覧とHAZUSE 11/28群を全メーカー横断し、他の同日未処理パチスロを確認してから群CLOSED判定する。
- `ニューペガサスR` は後年設置期限一覧で11/28表記があるが、パチビー/HAZUSEは **2016-12-12** 導入で一致するため11/28群へ先行登録しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1025を再取得。
2. **1025件 / chronologicalFrontier 2016-11-28 / 11/28群OPEN** を正本として継続。
3. 次未処理の **タイヨーエレック「パチスロ火曜サスペンス劇場」** を重複確認後、性能コア+resetBehavior v0.7で登録。
4. その後11/28同日全メーカー監査。HAZUSE/ALL7/メーカー/当時業界資料を横断し、漏れがなければ11/28群CLOSED → 11/29〜12/04境界 → 2016-12-05群へ進む。
5. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1025 SLOTバジリスク～甲賀忍法帖～Ⅲ
- PiDEA 発表会: https://www.pidea.jp/articles/%E3%80%9D%E7%A5%9E%E3%81%A3%E3%81%A6%E3%82%8B%E3%80%9F%E3%83%90%E3%82%B8%E3%83%AA%E3%82%B9%E3%82%AF%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E6%9C%80%E6%96%B0%E4%BD%9C%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB
- K-Navi: https://p-kn.com/slot/2651/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/99/h-1.php
- 一撃 総合: https://1geki.jp/slot/s_basirisk3/
- 一撃 reset/天井: https://1geki.jp/slot/s_basirisk3/3/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/27085/
- 期待値見える化: https://slotjin.com/zone/basilisk3/
- スロパチクエスト setting-change判別: https://www.slopachi-quest.com/article/bazirisk3-setttei/

### 境界/次候補
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ALL7 2016年11月: https://www.all7.jp/plans/index/2016/11
- Sammyマイスロ 2016-11-28 火曜サスペンス導入日: https://www.sammy.co.jp/japanese/myslot/news/index_10.html
- パチビー ニューペガサスR 2016-12-12: https://www.pachibee.jp/movies/index/13138
- HAZUSE ニューペガサスR: https://data.hazuse.com/?genre=204&machine_code=6S1222
