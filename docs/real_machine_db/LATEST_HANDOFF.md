# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは361件地点 `国際サラリーマンとおるくん`。既存361件を再追加せず、2009-04-21〜04-30の月末境界を監査した。
- ALL7 2009年4月一覧では4/20群より後に安全に追加できるパチスロ掲載を確認できず、メーカー/業界/古い導入資料の検索でも4/21〜4/30に具体日付きで優先すべき未処理機を確定できなかったため、4月末境界をいったん閉じて2009年5月へ進行。
- **今回 362「もっと楽シーサー25Φ」を追加。既存362件の再追加禁止。**

## 362. もっと楽シーサー25Φ

record:
- `docs/real_machine_db/machines/2009-05-06_motto-tanoshisa-25.md`

要点:
- manufacturer: SANKYO
- formalModelName: `もっと楽シーサーG`
- inspectionNumber: `8S0995`
- releaseDate: **2009-05-06**。当時グリーンべるとが納品開始を5月6日と明記。ALL7/ハズセは2009-05-07導入開始、SANKYO公式は2009.05導入。物流開始とホール導入開始の1日差として保持。
- generation: 5号機
- systemType: **ノーマル / ボーナス主体 + 天井RT**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 機械割は2系列が競合。P-WORLD等: **95.3 / 97.5 / 99.5 / 103.0 / 107.0 / 115.5%**。pacnk: **96.53 / 99.04 / 101.14 / 104.71 / 109.11 / 117.00%**。攻略条件差等の可能性はあるが正式定義を直接確定できず `CONFLICT_DEFINITION_UNRESOLVED`。
- BIG: **1/299.25 / 1/288.70 / 1/281.27 / 1/266.41 / 1/249.19 / 1/219.92**。
- CB: **1/322.84 / 1/309.13 / 1/299.25 / 1/278.88 / 1/259.04 / 1/227.56**。
- 合算: **1/155.29 / 1/149.28 / 1/144.99 / 1/136.24 / 1/127.00 / 1/111.83**。
- 50枚ベース: **34.27 / 34.91 / 35.57 / 36.27 / 37.00 / 37.76G**。旧パチマガスロマガの1000円あたりゲーム数直接値。
- BIG約310枚、CB104枚。
- ボーナス間**777G**で次回ボーナスまで継続する天井RTへ突入。純増約**+0.4枚/G**。

### v0.7 resetBehavior

- settingChangeBehavior: pacnkに**「設定変更後もゲーム数を引き継ぐ」**との本機解析あり。メーカー一次未照合のため `ANALYSIS_SINGLE_FINDING` として保持。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の本機固有明記を直接回収できず、一般論で補完しない。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の天井カウンタ/RT状態を確定できず。
- gameCounterReset: `SETTING_CHANGE_CARRY_OVER_REPORTED`。777G天井のため朝一宵越し狙いに直接影響する重要特性。
- ceilingAfterReset: `NO_SHORTENING_CONFIRMED`。通常777G。設定変更後ゲーム数引継ぎとの解析値があり、リセット専用短縮天井は確認されない。
- modeAfterReset: `NOT_APPLICABLE_TO_PUBLISHED_MODE_SYSTEM`。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。天井RT中の設定変更/電断でRT状態そのものが継続するかは未確定。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits: 設定変更でボーナス間ゲーム数を消さない解析値が正しければ、前日ハマリが朝一に残る。短縮恩恵ではなく「カウンタ非リセット」として記録。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 天井約10G前の上部ランプ/役物背景点滅は天井接近示唆であり変更判別ではない。ガックン/初期出目等は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: normalCeiling=777G、gameCountAfterSettingChange=`CARRY_OVER_REPORTED`。設定変更専用モード振分、朝一当選率、恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

主要出典（取得日 2026-09-02）:
- SANKYO / 「もっと楽シーサー」の機種詳細 — OFFICIAL
  - https://www.sankyo-fever.jp/collection/536/
- グリーンべると / 全てがパワーアップ！『もっと楽シーサー』 — INDUSTRY
  - https://web-greenbelt.jp/00003039/
- ALL7 / 2009年5月の導入機種一覧 — INDUSTRY_SCHEDULE_DATABASE
  - https://www.all7.jp/plans/index/2009/05/10
- P-WORLD / もっと楽シーサー25Φ — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5503
- ハズセ / もっと楽シーサー(赤パネルver.) — OLD_ANALYSIS_DATABASE
  - https://hazuse.com/machine/pachislot/8S0995/
- パチマガスロマガ / 小役確率・1000円あたりゲーム数 — OLD_ANALYSIS_HIGH
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/16/c.php
- パチマガスロマガ / 機種索引 — OLD_ANALYSIS_INDEX
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/16/sankyo_slot_16.php
- pacnk / もっと楽シーサー 設定判別ツール — SECONDARY_ANALYSIS_DATABASE
  - https://pacnk.com/slot/tools/sh_mottotanosisa.html
- パチスロ5号機まとめwiki / もっと楽シーサー — OLD_SECONDARY_ARCHIVE
  - https://w.atwiki.jp/5gouki/pages/166.html

commit:
- 362 もっと楽シーサー25Φ: `addc89840a0572f7b11c261ae832db3dabe2444b`

## 2009年4月末〜5月初頭 境界監査

- 4/20までの同日群は既存361件まで処理済み。
- 4/21〜4/30は、今回の監査で具体日付きの未処理パチスロを安全に確定できず、4月末境界を閉じた。
- ALL7は `天誅` を2009-05-01として掲載するが、K-Naviは**2009-06-01**、後年回顧資料も**2009年6月**としており、さらに2009-05-25時点の検定関連記録もあるため、**5/1を確定導入日として362より前へ挿入しない**。`天誅` は導入日CONFLICT候補として2009年6月境界で再監査する。
- SANKYO公式で `もっと楽シーサー` は25Φに加えて**30Φ全国バージョン / 30Φ沖縄バージョン**の別スペックが存在することを確認済み。全機種方針上は独立レコード候補だが、各30Φの具体的納品/導入日を次回先に監査する。
- 30Φ群の時系列が確定した後、ALL7 5/7群の `タイムリミット` 等へ進む。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 新規収集を止めず、既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準362件地点。既存362件の再追加禁止。**
2. **まず `もっと楽シーサー30Φ全国バージョン / 30Φ沖縄バージョン` の正式型式・具体納品/導入日・独立性能を監査する。25Φと同日/直後で独立レコード化すべきと確認できたものを最古から363件目へ追加する。**
3. 30Φ群を閉じた後、2009-05-07前後の `タイムリミット` など同日群を導入/納品の具体日で監査する。
4. `天誅` はALL7 2009-05-01とK-Navi 2009-06-01/回顧2009-06が競合するため、現時点では5月1日へ挿入せず2009年6月境界で再監査する。
5. 毎回GitHub最新mainで既存登録を確認し、未処理のみ追加する。
6. 各新規機で性能コアとv0.7 resetBehaviorを同時収集し、設定変更/据え置き/電源OFF→ON/天井/モード/状態/ガックン/有利区間を表記揺れ・型式・メーカー込みで多段検索する。
7. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。

## コミット

- 354 夢花月: `131ad235224d14cb77b34f8c6e5ae8f69b860640`
- 355 クラシックジャグラー: `bcaad8ff882a0f25a7ae9fa5c2bcb4bad3b10643`
- 356 シーシー: `98a07df0f48dfb6b919f11c20b44a4316820594e`
- 357 Rio2 クルージング・ヴァナディース: `2f7b399b4b356c78879119dc7074c8e191dfd447`
- 358 さすがの猿飛: `23e0068f8e288d4bed62a192d483ea3b84e90dfe`
- 359 エースをねらえ!: `405172802b73290cf1222ff6f8ea70489056971c`
- 360 プリティ戦記: `a834bd17236dc67a52086fa0c7a7f4941080972a`
- 361 国際サラリーマンとおるくん: `f8a9510d08507ee4c2ab86600a3997a92b6f4903`
- 362 もっと楽シーサー25Φ: `addc89840a0572f7b11c261ae832db3dabe2444b`
