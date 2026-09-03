# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **450**
- latestMachineAdded: **パチスロ BLOOD+**
- latestRecord: `docs/real_machine_db/machines/2010-02-15_pachislot-blood-plus.md`
- chronologicalFrontier: **2010-02-15**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**
- note: 449件地点から2010-02-08同日群および2/09〜2/14境界を最終監査し、具体導入日の早い未登録機を確認できなかったため、次の具体日確認済み機 `パチスロ BLOOD+`（2010-02-15）を450件目として追加。

## 今回の継続確認

- GitHub最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直近レコード `2010-02-07_afro-no-monchi.md` と前線レコード `2010-02-08_pachislot-super-umi-monogatari.md` を再読。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わずLATEST_HANDOFF＋実レコードを優先。
- 開始時mainは449件 / chronologicalFrontier 2010-02-08 / latestMachineAdded アフロのモンチ。
- 2/8〜2/14を再監査。『続・お見事！サブちゃん』『ノーマルだよ！サブちゃん』の2/8前後記事は発表/披露であり、ホール導入日と混同しない。
- repo検索で `BLOOD+` の既存レコードなしを確認してから追加。

## 450 — パチスロ BLOOD+ 要約

- メーカー: **タイヨーエレック**
- 導入: **2010-02-15**（K-Navi具体日＋2010-02-13当時記事で整合）
- 世代: **5号機**
- システム: **A+ART / ボーナス+RT/CZ+ART**
- BIG合算: **1/404.5 / 1/399.6 / 1/394.8 / 1/390.1 / 1/385.5 / 1/381.0**
- REG: **1/712.3 / 1/697.2 / 1/682.7 / 1/668.7 / 1/655.4 / 1/642.5**
- ボーナス合算: **1/258.0 / 1/254.0 / 1/250.1 / 1/246.4 / 1/242.7 / 1/239.2**
- 機械割: **CONFLICT**
  - K-Navi / CrankySeven / A-SLOT: **96.8 / 98.7 / 101.2 / 104.0 / 110.0 / 110.3%**
  - P-WORLD: **96.8 / 98.7 / 100.7 / 103.8 / 110.0 / 110.3%**
- 50枚ベース: **33.0 / 33.2 / 33.3 / 33.5 / 33.6 / 33.8G**（CrankySeven直接掲載値）
- BIG: **約256枚** / REG: **約55枚**
- ART「BLOOD CHANCE+」: **約+1.0枚/G、基本50G以上**
- RT/CZ「BLOOD CHANCE」: **約+0.2〜+0.3枚/G**（資料間丸め/表記差）
- 通常天井: **ボーナス間1000G**。到達後の次回ボーナスでARTが確定/優遇。
- formalModelName / approvalNumber / 設定別総合ART初当たり: 十分な再探索後も安全な直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

## resetBehavior v0.7 — パチスロ BLOOD+

- **設定変更**: `CEILING_COUNTER_RESET_AND_HIGH_STATE_START_CONFIRMED_ANALYSIS`
  - 天井までのゲーム数はクリア。
  - 高確率状態からスタート。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。設定変更時の逆から推定せず、初代機固有の直接記述を確認できないため未確定。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。天井カウンタ/内部状態/RT・ART状態の処理を直接確定できず。
- **gameCounterReset**: `RESET_ON_SETTING_CHANGE_CONFIRMED`
- **ceilingAfterReset**: `NORMAL_1000G_FROM_RESET_NO_SHORTENING_CONFIRMED`。設定変更専用短縮天井は確認されない。
- **modeAfterReset**: `NO_RESET_SPECIFIC_GAME_COUNT_MODE_CONFIRMED`
- **stateAfterReset**: `HIGH_STATE_START_CONFIRMED_ANALYSIS`
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵**: `HIGH_STATE_START_CONFIRMED`
- **朝一不利**: `CEILING_PROGRESS_LOST_CONFIRMED`
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/朝一/据え置き判別を再探索したが、2010年初代固有の高信頼資料を確定できず。2016年後継情報は流用しない。
- **公開朝一数値**: 高確スタート自体は確認したが、振分率・朝一当選率・恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要CONFLICT / 欠損

- payoutRateBySetting: 設定3・4が `101.2 / 104.0%` 系列とP-WORLD `100.7 / 103.8%` で競合。平均せず双方保持。
- RT/CZ純増: 約+0.2 / +0.25 / +0.3枚/Gの表記差。ART主値+1.0枚/Gとは分離。
- formalModelName / approvalNumber: `UNVERIFIED_AFTER_RESEARCH`。CR版や2016年後継の型式情報を流用しない。
- ARTInitialHitBySetting / carryOverBehavior / powerCycleBehavior / resetDetection: `UNVERIFIED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- K-Navi: `https://p-kn.com/slot/1133/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5811`
- CrankySeven: `https://crankyseven.com/blood-pc.htm`
- A-SLOT: `https://www.a-slot.com/SHOP/taiyo_elec7.html`
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/3813/greenbelt`
- 2010-02-13当時記事: `https://mezase20.com/blog-entry-263.html`
- パチマガスロマガ回顧: `https://pachimaga.com/free/special/5d0ce1846a4dd77fda2a273e83a2164685982e8c.php`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、QAリレー時にその直後の最初のresetBehavior欠損実ファイルから補完する。

## 次回再開地点

1. **recordCount 450 / chronologicalFrontier 2010-02-15**。
2. まず **2010-02-15同日群を最終監査**し、BLOOD+より同日内で未登録のパチスロがないか確認。
3. 同日群を閉じたら **2/16〜2/20境界**を日付検索・当時業界記事・月次DBで監査。発表日/展示会日/検定告示日と納品・ホール導入日を分離する。
4. 後続具体日確認済み候補: **ゼットゴールドEX 2010-02-21**、**みどりのマキバオー 2010-02-22**。ただし2/15〜20の未処理を飛ばさない。
5. 2010年2月月内候補として `ビューティフルジョー`、`ピカ吾郎V2`、`バイオレントゾーン`、`列強伝`、`新世紀エヴァンゲリオン～魂の軌跡～`、`ハイハイ30`、`真田純勇士`、`哲也 新宿vs上野DX` 等を具体導入日へ落として最古から追加。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得し、repo検索で重複・他リレー競合を防ぐ。
