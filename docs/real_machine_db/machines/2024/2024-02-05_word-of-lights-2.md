# ワードオブライツⅡ

recordNo: 1628
machineName: ワードオブライツⅡ
aliases: ワードオブライツII / ワードオブライツ2 / ワードラ2
manufacturer: エレコ（ユニバーサルエンターテインメント）
formalModel: S/ワードオブライツⅡ/WF
inspectionCode: 330291
releaseDate: 2024-02-05
generation: 6.5号機 / メダル機
systemType: リアルボーナス+AT（CT） / 技術介入機
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 遊技日本/P-WORLDのメーカー発表記事、P-WORLD機種DB、HAZUSE、主要解析で2024-02-05導入を確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 公安委員会検定通過を扱う遊技日本/P-WORLDで型式 `S/ワードオブライツⅡ/WF` を確認。
- HAZUSE/Ativoで検定番号 `330291` を確認。
confidence: INDUSTRY / ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 市場想定98.2% / 完全攻略101.0%
- setting2: 市場想定99.9% / 完全攻略102.5%
- setting5: 市場想定102.9% / 完全攻略105.5%
- setting6: 市場想定106.1% / 完全攻略108.5%
initialHitBySetting:
- setting1: BIG 1/224.4 / CT初当たり 約1/374
- setting2: BIG 1/208.7 / CT初当たり 約1/361
- setting5: BIG 1/193.9 / CT初当たり 約1/335
- setting6: BIG 1/179.1 / CT初当たり 約1/322
baseGamesPer50: 約37.4G/50枚
netIncrease:
- CT: 約0.5枚/G
basicPayout:
- BIG: 最大153枚
- 通常BIG後CT突入率: トータル50%以上
- CT: 初期100G+α / 約0.5枚/G
- 天井到達時: CT300G
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時最大1200G+α消化でCT300Gに当選。CT中ゲーム数は天井カウント外。
- 有利区間移行タイミングによりデータ表示と数ゲームのズレが生じる場合あり。
- 通常BIG後は技術介入を含むCTルーレットでCT突入を抽選し、トータル50%以上。
- CTはメインCT/ピンチCTで構成され、BIG当選でCT自体が終了しないループ型。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_SUBSTATE_AND_GACKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 通常時天井ゲーム数をRESETし0Gから再計数。
- 設定変更専用の天井短縮、朝一専用モード、固定的な初当たり優遇は主要解析で確認できない。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION / ANALYSIS_HIGH_FOR_CEILING_RESET / PUBLIC_VALUE_NOT_FOUND_FOR_SPECIAL_RESET_MODE

### carryOverBehavior
- 据え置き時は有利区間をCARRY_OVERとする主要解析を確認。
- 天井ゲーム数もCARRY_OVER。前日+当日通常時ゲーム数の累計が1200G付近でCT300Gに入れば据え置き濃厚材料。
- 通常時に独立管理される名称付きモード/高確等について、本機は通常時がリアルボーナス主体であり、朝一引継ぎ対象として比較可能な公開状態テーブルを確認できない。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_AND_CEILING / NOT_APPLICABLE_OR_PUBLIC_VALUE_NOT_FOUND_FOR_NAMED_MODE

### powerCycleBehavior
- 純電源OFF→ONでは天井ゲーム数をCARRY_OVER。
- 有利区間もCARRY_OVERとする攻略整理を確認。
- 電源OFF→ONのみで朝一専用恩恵へ移行する契約は確認できない。
- 表示/ステージ等の電断復帰挙動を明記した高信頼の機種固有資料は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_ADVANTAGEOUS_SECTION / UNVERIFIED_FOR_DISPLAY_RESTORE_DETAILS

### gameCounterReset
- 通常天井: 1200G+α（CT中ゲーム数は除外）。
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 設定変更後も天井は通常同様1200G+α。
- 設定変更専用の短縮天井数値は確認できない。
confidence: ANALYSIS_HIGH_FOR_NORMAL_CEILING / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH_FOR_RESET_SHORTENING

### modeAfterReset
- 設定変更専用の通常A/B等のモード、朝一専用モード、公開振り分けはメーカー/業界/主要解析/旧攻略系を再探索したが確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常時はリアルボーナス抽選を主体とする構成で、ゾーン振り分けについても当時攻略では「調査中」。
confidence: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### stateAfterReset
- 通常/高確等の朝一内部状態振り分け、設定変更/据え置き/電断時の独立状態契約は主要解析で公開固定値を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 推測で状態RESET/CARRY_OVERを補完しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間ランプによる設定変更/据え置き判別は不可。
confidence: ANALYSIS_HIGH

### resetBenefits
- 設定変更時の天井短縮・専用モード・初当たり優遇等は確認できず、後年攻略整理でも「リセット恩恵なし」とされる。
- よって公開された主要朝一恩恵は `NONE_CONFIRMED`。
confidence: ANALYSIS_SINGLE_FOR_EXPLICIT_NONE / MULTI_SOURCE_ABSENCE_FOR_SPECIAL_BENEFIT

### resetPenalties
- 据え置きなら利用できた前日天井ゲーム数進行は設定変更で失われる。
- それ以外の設定変更専用マイナス数値は確認できず。
confidence: ANALYSIS_HIGH_FOR_LOST_CEILING_PROGRESS / PUBLIC_VALUE_NOT_FOUND_FOR_NUMERIC_PENALTY

### resetDetection
- 有利区間ランプによる判別不可。
- なな徹は設定変更時挙動・リセット判別を「現在調査中」としている。
- 外見による確定判別は確認できず、後年攻略整理も「見た目によるリセット判別ができない」とする。
- 前日最終通常G+当日通常Gが1200G付近でCT300Gへ入れば据え置き濃厚材料。
- 本機固有ガックン条件/発生率は `ワードオブライツⅡ / ワードラ2 / S/ワードオブライツⅡ/WF / エレコ` × `ガックン / 設定変更 / リセット / 据え置き / 朝一 / 電源OFF ON` で再探索したが、一次/主要解析で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LAMP_AND_CEILING_BEHAVIOR / UNVERIFIED_FOR_GACKUN

### numericResetData
- 通常/リセット後天井: 1200G+α。
- 天井恩恵: CT300G。
- リセット専用天井短縮: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- リセット専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- リセット専用初当たり/CZ数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 朝一専用の公開数値は確認できず。
- 比較可能な数値は通常同様の最大1200G+α天井 / 到達時CT300Gのみ。

## missingFields
- 純電源OFF→ON後の画面/ステージ等の機種固有復帰表示: UNVERIFIED_AFTER_RESEARCH
- 通常/高確等の朝一内部状態契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 朝一専用モード/振り分け/初当たり優遇数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 完全攻略時設定1機械割は遊技日本/P-WORLD・主要攻略・HAZUSE詳細ページで101.0%が一致。一方、HAZUSE概要ページに101.1%表記が存在するため `CONFLICT_HAZUSE_SUMMARY_101_1_VS_DETAILED_101_0` として保持し、canonicalは複数一致の101.0%。
- BIG/CT初当たりは一部資料で丸め値（BIG 1/224等、CT 1/374等）表記。BIGは業界発表の精密値224.4/208.7/193.9/179.1をcanonicalとし、CTは公開資料の丸め値として明示。

## sources
retrievedAt: 2026-09-14
- ユニバーサルエンターテインメント公式機種サイト: https://www.universal-777.com/product/slot/ward_of_lights2/
- 遊技日本/P-WORLD 検定通過 — 型式 `S/ワードオブライツⅡ/WF`: https://news.p-world.co.jp/articles/25543/nippon
- 遊技日本/P-WORLD 発売発表 — エレコ、設定別BIG/市場～完全攻略出玉率、CT概要: https://news.p-world.co.jp/articles/26236/nippon
- P-WORLD機種DB — 天井1200G、CT300G、設定別BIG/AT: https://www.p-world.co.jp/machine/database/9967
- HAZUSE機種情報 — 型式、検定番号330291、導入日、ベース約37.4G、天井1200G: https://hazuse.com/hd/sx0064/
- HAZUSE詳細 — 市場/完全攻略機械割: https://hazuse.com/machine/pachislot/SX0064/
- Ativo — 型式/検定番号、純増、BIG最大153枚、CT初期100G: https://ativo.jp/2023/12/20/%EF%BD%93%E3%83%AF%E3%83%BC%E3%83%89%E3%82%AA%E3%83%96%E3%83%A9%E3%82%A4%E3%83%84ii/
- なな徹 朝一 — 設定変更=有利区間RESET、据え置き=引継ぎ、ランプ判別不可、挙動/判別調査中: https://nana-press.com/kaiseki/machine/694/19529/
- なな徹 スペック — BIG/AT確率: https://nana-press.com/kaiseki/machine/694/18839/
- 一撃 天井 — 1200G+αでCT300G: https://1geki.jp/slot/s_ward_of_lights2/3/
- イチカツ — 設定変更で天井RESET、電源ON/OFFで天井引継ぎ: https://ichikatsu.com/wardoflights2/
- ぽこすろっと（後年攻略整理・補助） — 設定変更で天井/有利区間RESET、電源OFF/ON引継ぎ、見た目判別不可、リセット恩恵なし: https://www.nankaikoya.jp/wardoflights2-kitaichi/
