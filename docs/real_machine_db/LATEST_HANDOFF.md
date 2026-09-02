# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは365件地点 `タイムリミット`。
- **今回 366「パチスロ アタックNo.1」（三洋物産）を追加。既存366件の再追加禁止。**

## 366. パチスロ アタックNo.1

record:
- `docs/real_machine_db/machines/2009-05-10_attack-no1.md`

要点:
- manufacturer: 三洋物産
- formalModelName: `アタックNo.1KG`
- inspectionNumber: `8S1174`
- releaseDate: **2009-05-10**。グリーンべるとが2009-04-15記事で「納品は5月10日からスタートする予定」と明記。K-Naviは5月中旬、P-WORLDは2009年5月導入で整合。
- generation: 5号機
- systemType: **ボーナス + 完走型RT / CZ / パンク回避型**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- BIG: **1/458.29 / 1/445.82 / 1/431.16 / 1/414.79 / 1/409.60 / 1/399.61**
- REG: **1/655.36 / 1/630.16 / 1/606.82 / 1/585.15 / 1/474.90 / 1/399.61**
- 合算: **1/269.7 / 1/261.1 / 1/252.1 / 1/242.7 / 1/219.9 / 1/199.8**
- 機械割はP-WORLD **98.2 / 99.7 / 101.6 / 104.3 / 108.1 / 112.3%** とpacnk **98.1 / 99.7 / 101.6 / 104.3 / 108.0 / 112.2%** に0.1pt差があるため `CONFLICT_ROUNDING_SMALL`。平均しない。
- BIG約305枚、REG約73枚。
- RT「アタックタイム」は基本約80G、純増約**+0.6枚/G**。技術介入で5G延長可能。スーパーアタックタイムは最大150G級。
- 通常時**2000G消化でCZ**へ突入する天井構造をP-WORLDで確認。
- 2009年版の50枚ベースは表記揺れ/型式/検定番号と「50枚/1000円/千円/ベース/コイン持ち/1k」を組み替えて再探索したが直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。2013年版「開幕!世界選手権～」の30.9〜31.1Gは別機種なので流用禁止。

### v0.7 resetBehavior

- settingChangeBehavior: **設定変更後はCZスタート**。P-WORLD 2009年版の初打ちレクチャーに直接記載。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の2000G天井カウンタ、CZ/RT状態、RT残Gの翌日引継ぎを直接確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の天井カウンタ/CZ/RT状態を直接確定できず。
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH`。通常2000G→CZは確認済みだが、設定変更時の内部カウンタ消去/引継ぎは直接資料なし。設定変更後は別途CZスタートすることのみ確定。
- ceilingAfterReset: **SETTING_CHANGE_STARTS_IN_CZ_IMMEDIATELY**。通常2000G到達型CZに対する朝一実質恩恵。短縮天井G数とは定義を分ける。
- modeAfterReset: 朝一専用モード振り分けは確認できず。
- stateAfterReset: **CZ_START_CONFIRMED_ON_SETTING_CHANGE**。CZ内部詳細は物差し用途外/資料不足のため深追いしない。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits: **設定変更後CZスタート**。P-WORLDは朝一RT突入チャンスと記載。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン、初期出目、液晶、ランプ等を機種名/型式/メーカー/設定変更/朝一/据え置き/電源で多段検索したが直接根拠を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: normalCeiling=`2000GでCZ`、resetSpecificCeiling=`NOT_A_GAME_COUNT_SHORTENING_SETTING_CHANGE_STARTS_CZ_IMMEDIATELY`、morningHitRate/resetBenefitRate=`UNVERIFIED_AFTER_RESEARCH`。

主要出典（取得日 2026-09-02）:
- グリーンべると / スポ根漫画の名作「アタックNo.1」がパチスロに — INDUSTRY
  - https://web-greenbelt.jp/00003085/
- P-WORLD / パチスロアタックNo.1「2009年」 — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5536
- K-Navi / 新機種「パチスロ アタックNO.1」内覧会 — OLD_INDUSTRY_ANALYSIS
  - https://p-kn.com/topics/exhibition/471/
- K-Navi / 元祖スポ根少女アニメとのタイアップ機 — OLD_INDUSTRY_ANALYSIS
  - https://p-kn.com/topics/news/782/
- pacnk / パチスロ アタックNo.1 設定判別ツール — RETROSPECTIVE_ANALYSIS
  - https://pacnk.com/slot/tools/sh_attackno1.html
- パチマガスロマガ / アタックNo.1 — OLD_ANALYSIS_INDEX
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/08/sanyo_slot_08.php

commit:
- 366 パチスロ アタックNo.1: `a12a7bf300f3e1cca386a530a5e2f708c12a1c78`

## 2009年5月初頭 境界監査

- 2009-05-07群は `もっと楽シーサー25Φ / 30Φ全国 / 30Φ沖縄 / タイムリミット` まで収録済み。
- 2009-05-08〜09は今回の具体日監査で安全に追加できる未処理機を確定できず。
- **2009-05-10「パチスロ アタックNo.1」を今回追加。**
- `スーパーアロハ` は当時グリーンべるとで **2009-05-11納品開始予定**、パイオニア公式で2009年5月発売。Pマンズ当時記事では25φ機と明記。
- `スーパーアロハ-30` という2009年別機種はパイオニア公式2009年一覧/5号機一覧で確認できず、現時点で独立レコード候補から外す。名称だけで30φ派生を捏造しない。
- その後 `スターマンアイズ / スロットニュートラッド / デュエルドラゴンキングダム / レキオ2-30 / 琉球浪漫25 / 琉球浪漫30 / 緑ドン` 等を具体導入日順に監査する。
- `天誅` はALL7 2009-05-01とK-Navi 2009-06-01/回顧2009-06が競合するため、推測で5月1日へ遡及挿入しない。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 新規収集を止めず、既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準366件地点。既存366件の再追加禁止。**
2. **2009-05-10同日群を最終監査し、未処理がなければ2009-05-11「スーパーアロハ」（パイオニア）を最優先候補として処理する。**
3. スーパーアロハは25φ機として当時資料あり。別30φ版は公式一覧で確認できないため独立追加しない unless 新しい直接資料が見つかる。
4. その後2009年5月月内候補を具体導入日順に進める。
5. 毎回GitHub最新mainで既存登録を確認し、未処理のみ追加する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。

## 直近コミット

- 362 もっと楽シーサー25Φ: `addc89840a0572f7b11c261ae832db3dabe2444b`
- 363 もっと楽シーサー30Φ全国バージョン: `2a46545e16bd7cdab4b46f1fdbfa2c9d7db8ee82`
- 364 もっと楽シーサー30Φ沖縄バージョン: `6e39c042e4c0333b7d3a0b883e0c3111eb5b9b10`
- 365 タイムリミット: `aca238055e53007a3d374226ec052b6705b4d21a`
- 366 パチスロ アタックNo.1: `a12a7bf300f3e1cca386a530a5e2f708c12a1c78`
