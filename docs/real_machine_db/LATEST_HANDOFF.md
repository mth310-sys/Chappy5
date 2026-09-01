# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **285 `爆音伝説サクラ`（KPE / 2008-08-04）**。
- 今回新規で **286 `犬キング`（コルモ / 型式イヌキングX / 2008-08-04）** を追加した。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 286. 犬キング

- record: `docs/real_machine_db/machines/2008-08-04_inuking.md`
- manufacturer: コルモ
- modelName: `イヌキングX`
- generation: 5号機
- systemType: ボーナス+押し順ナビAT+5G RT
- 導入時期はグリーンべるとが2008-08-03納品開始予定、当時業界アーカイブが2008-08-04発売。定義差を保持し、主releaseDateは2008-08-04。
- ボーナス合成は設定1〜6で 1/282.48, 1/266.41, 1/252.06, 1/227.56, 1/207.39, 1/183.06。
- BIG合成は1/564.97〜1/368.18、CHALLENGE/CB合成は1/564.97〜1/364.09。
- BIG約300枚、CHALLENGE約221枚。
- 通常時ベース約41G/50枚、AT状態約55G/50枚（当時業界記事の1000円あたり値を20円スロット50枚=1000円として整理）。
- 5G RT「ワンワンタイム」は旧解析で純増約+0.2枚/G。
- パチマガスロマガPAYOUTは 96.39/98.52/100.77/104.78/109.10/114.54%。pacnkは 97.10/98.90/101.40/105.10/109.20/114.10%、旧解析は概ね後者系列。平均せず `CONFLICT_PAYOUT_RATE`。
- 旧解析で通常ゲーム数天井「なし」を確認。
- coreStatus: `COMPLETE_CORE_WITH_PAYOUT_CONFLICT`

### resetBehavior（286）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 設定変更時のAT残G/ナビ率状態処理を本機固有本文で確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時のAT残G/ナビ率状態の前日跨ぎ処理を確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみのAT残G/ナビ率状態処理を確定できず。
- `gameCounterReset`: `NOT_APPLICABLE_FOR_CEILING` — 通常ゲーム数天井なし。AT残G処理は別途未確定。
- `ceilingAfterReset`: `NOT_APPLICABLE` — 通常ゲーム数天井なし。
- `modeAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — ナビ率10/33/100%状態の設定変更時再抽選/初期状態、朝一専用モードは確定できず。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — ガックン、初期出目、表示、犬のキモチメーター等による本機固有の変更判別を確定できず。
- `numericResetData`: 通常ゲーム数天井なし。朝一専用数値は確認できず。

## 今回の主要出典

取得日: 2026-09-01

- https://news.p-world.co.jp/articles/2890/greenbelt
  - 当時業界一次。8月3日納品開始予定、BIG約300枚、CHALLENGE約221枚、押し順ナビAT、5G RT、合算1/282.5〜1/183.1、通常約41G/1000円・AT約55G/1000円。
- https://www.p-world.co.jp/machine/database/5236
  - 型式名 `イヌキングX`、検定番号7S1289、2008年8月導入、払い出し条件。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/03/h.php
  - 当時解析系。設定別BIG/CB/合算、シミュレートPAYOUT。
- https://pacnk.com/slot/tools/sh_inuking.html
  - 別DB。設定別合算とPAYOUTの照合、CONFLICT検出。
- https://www.eightbeat.com/slot99/kishu/a_gyou/i/inuking/page_menu.html
  - 旧解析。天井なし、5G RT、純増約+0.2枚/G、設定別確率の丸め照合、ATナビ率10/33/100%。
- https://p-kn.com/slot/832/
  - 旧攻略DB。押し順ナビAT、5G RT、ボーナス払い出し条件、AT最大2000G上乗せ記載の補助確認。
- https://slothistory.com/kousin_kako05.html
  - 当時業界アーカイブ。2008-08-04発売記録。

## 重複防止・境界管理

- **既存286件の再追加禁止。**
- `犬キング` は型式 `イヌキングX`。同名表記揺れとして二重登録しない。
- `爆音伝説サクラ` は2007年旧仕様と2008年発売版の数値を混在させない。
- `海人G-30` と25Φ `海人` は別レコード。
- `完熟チェリー` は2008年10月境界で再確認する。
- `スーパージャックポットK / P-30` は別型式痕跡の同一機/別機判定を後続QAで継続する。
- 情報提供端子板の対応機種化日だけを導入日として扱わない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同しない。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準286件地点。時系列は2008-08-04 `犬キング` まで進行。**
2. 次は2008年8月初旬の **`メガラニカ`（ウィンネットテクノロジー/ラスター）** を最優先で具体導入日監査する。現時点で2008年8月リリース、型式痕跡 `メガラニカ`（検定2008-06-19）および後発 `メガラニカDX`（検定2008-08-18）を確認しているため、DXを同一機として混ぜない。
3. `メガラニカ` は後年資料でノーマルタイプ、機械割98.1〜109.5%、BIG 1/297.9〜1/264.3、REG 1/3276.8、MEGAゲーム1/468.1〜1/364.1、合算1/172.5〜1/146.3まで候補値を確認済み。登録前に当時業界/解析資料で照合し、基本獲得枚数・50枚ベース・MEGAゲームの定義を確定する。
4. v0.7 resetBehaviorではノーマル機であることを前提に決め打ちせず、設定変更/据え置き/電源OFF→ON/ゲーム数天井/モード・状態/朝一恩恵・不利/変更判別を機種名・型式・メーカー名で再探索する。
5. その後、2008年8月初旬群を具体日順に監査し、より早い未処理機があれば先に遡及追加する。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と検索項目を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
