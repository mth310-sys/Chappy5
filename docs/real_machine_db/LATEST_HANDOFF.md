更新日: 2026-09-12

## 現在地点
- recordCount: **1401**
- latestRecordAdded: **絶対衝激Ⅲ — No.1401**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-03-22_zettai-shougeki-iii.md`
- chronologicalFrontier: **2021-03-22**
- frontierLatestMachine: **絶対衝激Ⅲ — No.1401**
- schema: **resetBehavior v0.7**
- status: **2021-03-22_GROUP_CLOSED_1_OF_1_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコードNo.1400を再取得して開始。
- `INDEX.md` は旧表示（19件地点）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- 開始時点はNo.1400「ミスタートリプルクラウン」、2021-03-08群CLOSED。次回指定どおり2021-03-09〜03-21境界を再確認し、2021-03-22群へ進行。
- 1geki・K-Navi・イチカツ等で2021-03-22の全国系パチスロ新台は「絶対衝激Ⅲ」1機を確認。地域機/PB/別型式も検索語を変えて監査したが追加候補を固定できず、03-22群をCLOSED。
- No.1401「絶対衝激Ⅲ」を追加し、性能コア + resetBehavior v0.7を同時収集。
- 2021-03-29はK-Navi/全国系カレンダーでパチスロ新台なし。次の全国系本線は2021-04-05群。
- 遡及resetBehavior QAは本線を優先し、カーソルを動かしていない。

## No.1401 — 絶対衝激Ⅲ
- path: `docs/real_machine_db/machines/2021-03-22_zettai-shougeki-iii.md`
- manufacturer: **スパイキー**
- formalModel: **S絶対衝激IIISS**
- certificationNumber: **0S1415**
- releaseDate: **2021-03-22**
- generation/system: **6.1号機 / AT / 擬似ボーナス / 衝激ループ**
- payoutRateBySetting: **97.4 / 98.9 / 101.1 / 104.1 / 106.2 / 108.5%**
- initialHit: **1/216 / 206 / 194 / 181 / 176 / 172**
- shockLoop: **1/507 / 485 / 460 / 432 / 422 / 413**
- baseGamesPer50: **約36G/50枚（設定1）**
- netIncrease: **約2.7枚/G**
- basicPayout: **バトルBONUS 15G・平均約40枚 / PB 30G+α**
- normalCeiling: **有利区間突入後555G+α → バトルBONUS**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_CONTRACT_WITH_EMPIRICAL_MORNING_VALUE**

### resetBehavior v0.7 — No.1401
- 設定変更: **有利区間RESET / 天井RESET / 内部状態RESET / 内部モードRESET / 非有利区間開始**。
- 据え置き・純電源OFF→ON: **有利区間・天井・内部状態・内部モードCARRY_OVER**。据え置きは電断契約からの定義注記付きcanonical。
- 固定短縮天井は確認されず、通常天井は555G+α。ただし設定変更後はモード振り分けで明確な朝一優遇あり。
- 設定変更後は約**29.0%**で朝一/特殊テーブル、約**71.0%**で通常テーブル。
- 特殊テーブル選択時（全設定共通）: 天国**75.0%** / 通常25.0%。基本モードはノーマル24.8 / ココアゲUP9.3 / モテ期UP9.3 / 引き戻し55.8 / 裏準備0.8%。
- 通常テーブル側の天国率は設定1 **28.1%** → 設定6 **60.9%**。
- 朝一リアルボーナス実戦値: **22.3%（57/256）**、平均獲得**204枚**、当時試算期待値約750円。解析確定値ではないため `EMPIRICAL_SINGLE_SAMPLE` として保存。
- 変更判別: 設定変更時は非有利区間開始のため有利区間ランプ消灯が材料。ただし店側が数G回して点灯させる対策が可能。液晶単独判別は不可。
- 本機固有ガックン条件/発生率は表記揺れ・型式・シリーズ名・攻略系統を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の明確な定量的不利要素は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## 2021-03-22群 — CLOSED
固定キュー:
1. **絶対衝激Ⅲ — No.1401 / DONE**

- 1geki 2021年3月カレンダーは03/22のスロットを本機1機として掲載。
- K-Naviでも03/22は本機、03/29はパチスロ新台なし。
- イチカツ等も03/22導入を照合。
- status: **2021-03-22_GROUP_CLOSED_1_OF_1_KNOWN_PROCESSED**。

## 次回本線の再開地点
- 最新main再同期後、**2021-03-23〜2021-04-04境界を短く再確認 → 2021-04-05群**へ進む。
- 1geki 2021年4月カレンダーの04/05パチスロ既知候補は2機:
  1. **ニューパルサーSPⅢ — No.1402候補**
  2. **Sパチスロ1000ちゃんごらくver. — 後続候補**
- 次回は型式/検定、地域機・PB・別スペック・延期差も再監査して固定キューを確定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）**。
- 今回は本線を優先したためカーソル未移動。

## GitHub保存
- No.1401追加 commit: `41b6a4de843e9f710e1c630274f53cc5e677d9a6`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1401 絶対衝激Ⅲ
- https://hazuse.com/machine/pachislot/0S1415/
- https://chonborista.com/slot/nanashow/129577/
- https://nana-press.com/kaiseki/machine/113/3505/
- https://1geki.jp/slot/s_zettaishougeki3/38/
- https://1geki.jp/slot/s_zettaishougeki3/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/16/bn01.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/16/kh03.php
- https://pachiseven.jp/machines_v2/6248
- https://slotkaiseki.com/zettaishougeki_henkougo/
- https://ichikatsu.com/zettaishougeki3/
- https://p-kn.com/slot/3550/

### 2021年3月境界 / 次回候補
- https://1geki.jp/newmachinecalender/202103/
- https://p-kn.com/calendar/202103/
- https://1geki.jp/newmachinecalender/202104/
