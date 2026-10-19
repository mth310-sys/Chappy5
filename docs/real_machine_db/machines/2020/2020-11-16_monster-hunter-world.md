# パチスロ モンスターハンター:ワールド™

No: 1378
machineName: パチスロ モンスターハンター:ワールド™
machineNameVariants: モンスターハンター:ワールド / モンハンワールド / SモンスターハンターワールドZI / SモンスターハンターワールドZⅠ
manufacturer: エンターライズ
releaseDate: 2020-11-16
formalModelName: SモンスターハンターワールドZI
certificationNumber: 0S0948

generation: 6号機
systemType: AT / 擬似ボーナス / クエスト周期 / 有利区間管理

## identity / release
- HAZUSEで型式 `SモンスターハンターワールドZI`、検定番号 `0S0948`、導入開始日2020-11-16、メーカー エンターライズを確認。
- 1geki 2020年11月新台カレンダーは2020-11-16を「パチンコ2 / スロット1」とし、スロットは本機のみ。
- パチビーも導入日2020-11-16で一致。
- reliability: DATABASE_HIGH / INDUSTRY_CALENDAR

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.8% |
| 3 | 100.7% |
| 4 | 105.2% |
| 5 | 108.1% |
| 6 | 111.2% |
- HAZUSE、パチビー、複数解析で一致。
- reliability: DATABASE_HIGH / ANALYSIS_HIGH

## initialHitBySetting
| 設定 | ボーナス初当たり |
|---:|---:|
| 1 | 1/375.1 |
| 2 | 1/356.8 |
| 3 | 1/336.3 |
| 4 | 1/306.7 |
| 5 | 1/284.6 |
| 6 | 1/262.6 |
- HAZUSE、パチビー、1geki等で一致。
- reliability: DATABASE_HIGH / ANALYSIS_HIGH

## baseGamesPer50
- 約51.3G/50枚（設定1）。
- HAZUSE、1geki、ちょんぼりすたで一致。
- reliability: ANALYSIS_HIGH / DATABASE_HIGH

## netIncrease
- 擬似ボーナス/AT: 約3.0枚/G。
- reliability: INDUSTRY / DATABASE_HIGH / ANALYSIS_HIGH

## basicPayout
- BB「モンスターハンター:ワールド」: セレクトパート / 狩猟パート / 報酬パートで構成、モンスター狩猟失敗まで継続。狩猟勝率70%超の公表あり。
- アイルーボーナス: ベル8回成立まで継続。終了後は必ず作戦会議へ移行。
- ゾラ・マグダラオス誘導作戦成功でBBへ。成功率50%超の公表あり。
- 剥ぎ取りRUSH: ベル8回成立まで継続するFRストック特化ゾーン、平均ストック7個。
- 固定1セットG数/固定獲得枚数型ではないため、比較用には上記基本性能を保持する。
- reliability: INDUSTRY_DATABASE / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はアステラ→クエスト（探索/狩猟）の周期進行でボーナスを目指す。
- 有利区間突入時に最低50%で「有利区間引き継ぎ抽選」が行われ、当選時に天井発動権利を得る。
- 権利獲得時のゲーム数天井: 同一有利区間750G消化でボーナス。
- 権利獲得時の周期天井: クエスト3スルーで、4クエスト開始前にボーナス告知。
- 引き継ぎ抽選非当選時はクエスト失敗後に有利区間がリセットされ、次回有利区間突入時に再度抽選されるため、見た目上750Gを超えるハマリが発生し得る。
- 固定の「通常時最大750G」と解釈しない。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_WITH_LIMITED_UNVERIFIED_FIELDS
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は **非有利区間へ移行**。
- 天井/有利区間はRESET。
- 開始画面はアステラ。
- ななプレスは「ガックンはしない」と明記。
- 設定変更後の詳細な内部状態初期振り分けは直接公開値を固定できないため、非有利区間移行以上を推測で補完しない。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き相当の純電源OFF→ONでは天井・有利区間を引き継ぐ。
- ななプレスは電源ON/OFFで「内部状態は電源OFF時と同一の状態に復帰」と明記。
- 前日狩猟中に閉店し翌朝も狩猟状態から始まれば据え置き確定とする解析あり。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみ: 天井CARRY_OVER / 有利区間CARRY_OVER / 内部状態CARRY_OVER。
- OFF時が狩猟中なら狩猟状態へ、フィールドならアステラorフィールド、AT中なら出玉状態に応じ復帰。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 天井進行RESET。
- 据え置き/純電断: 天井進行CARRY_OVER。
- ただし本機の「750G/3スルー天井」は有利区間引き継ぎ抽選に当選して天井権利を得た区間だけで有効なため、液晶上の総ハマリG数と内部天井進行を同一視しない。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更で前日の天井進行はRESET。
- 設定変更専用の一律短縮天井は確認できない。
- 新たな有利区間突入時に最低50%で天井権利の引き継ぎ抽選を行い、当選時のみ「同一有利区間750G」または「クエスト3スルー」が天井となる。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 設定変更で非有利区間へ移行し、次回有利区間突入時に最低50%の引き継ぎ抽選を行う。
- 「設定変更専用モード」や設定別の朝一専用モード振り分け表は、機種名/型式名/メーカー名と「設定変更・リセット・朝一・モード・振り分け」を組み替えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 純電源OFF→ONでは内部状態をOFF時と同一状態へ復帰することを直接確認。
- 設定変更時は非有利区間移行まで確認できるが、非有利区間から有利区間移行時の内部状態初期振り分け/高確率等の完全な公開契約は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: 有利区間RESET → 非有利区間。
- 据え置き/純電源OFF→ON: 有利区間CARRY_OVER。
- 通常時は有利区間ランプが基本消灯型のため、朝一のランプ消灯だけでは変更判別できない。
- reliability: ANALYSIS_HIGH

### resetBenefits
- パチスロメソッド等の朝一整理では **リセット恩恵は特になし**。
- 設定変更後も新たな有利区間突入時には天井権利抽選（最低50%）が行われるが、これは設定変更専用優遇ではなく有利区間突入時共通仕様。
- reliability: ANALYSIS_HIGH_FOR_NO_DEDICATED_BENEFIT

### resetPenalties
- 設定変更専用の定量的不利要素は `NONE_DIRECTLY_PUBLISHED`。
- 前日が既に天井権利取得済み/周期進行中なら設定変更でその進行を消すため据え置き比で客側価値が下がるケースはあるが、前日状態依存であり一律ペナルティとは扱わない。

### resetDetection
- 設定変更後はアステラ開始。
- 純電源OFF→ON時はアステラorクエスト等、OFF時状態に応じる。
- 朝一クエスト/狩猟状態なら据え置き濃厚〜前日狩猟中なら据え置き確定とする当時解析あり。
- 朝一アステラは設定変更でも据え置きでも起こり得るため判別不可。
- 通常時有利区間ランプ基本消灯型のためランプ消灯では判別不可。
- リールガックンは **しない**。
- reliability: ANALYSIS_HIGH

### numericResetData / publicMorningNumbers
- 有利区間突入時の天井権利「引き継ぎ抽選」: **最低50%**。
- 当選時: 同一有利区間750G消化 または クエスト3スルーでボーナス告知。
- 非当選時: クエスト終了後に有利区間をリセットし、次の有利区間突入で再度最低50%抽選。
- この50%は「設定変更専用数値」ではなく、有利区間突入時共通数値として定義を分離して保持する。
- 設定変更専用の朝一当選率、専用モード振り分け、専用初当たり/CZ率は `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。

## resetBehavior 再探索メモ
2026-09-11。`パチスロ モンスターハンター:ワールド / モンスターハンターワールド / モンハンワールド / SモンスターハンターワールドZI / 0S0948 / エンターライズ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / クエスト / モード / 状態 / ガックン / 有利区間 / 有利区間ランプ / 引き継ぎ` を組み替え、HAZUSE、1geki、ななプレス、パチマガスロマガ、パチビー、ちょんぼりすた、旧期待値/攻略系資料を横断。設定変更=非有利区間/天井RESET、純電断=天井・有利区間・内部状態引継ぎ、ガックンなし、朝一ステージによる判別条件を複数系統で固定。設定変更専用の内部状態初期振り分け・専用モード率は十分な再探索後も固定できないためUNVERIFIED扱いとする。

## conflicts
- 天井表記: 一部の概要資料は単純に「3周期+α」「750G」と表記するが、詳細解析では有利区間突入時の最低50%引き継ぎ抽選当選時のみ天井権利が有効。DBでは詳細契約をcanonicalとし、固定最大750Gとはしない。
- 型式表記: `SモンスターハンターワールドZI` / `SモンスターハンターワールドZⅠ` は字体差として同一型式扱い。

## missingFields
- 設定変更専用の内部状態初期振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用モード振り分け率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の朝一初当たり/CZ数値: NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-11
- https://hazuse.com/machine/pachislot/0S0948/genre/201/
- https://hazuse.com/machine/pachislot/0S0948/genre/203/
- https://hazuse.com/machine/pachislot/0S0948/genre/209/
- https://1geki.jp/slot/s_mhw/0/
- https://1geki.jp/slot/s_mhw/3/
- https://1geki.jp/slot/s_mhw/4/
- https://1geki.jp/slot/s_mhw/62/
- https://1geki.jp/newmachinecalender/202011/
- https://nana-press.com/kaiseki/machine/88/2106/
- https://nana-press.com/kaiseki/machine/88/2151/
- https://www.pachibee.jp/machines/index/220100005
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/21/kr01.php
- https://chonborista.com/slot/enta-slot/120055/
- https://slotmethod.jp/archives/9532/

sourceConfidenceSummary:
- identity/release: DATABASE_HIGH / INDUSTRY_CALENDAR
- core performance: ANALYSIS_HIGH / DATABASE_HIGH
- resetBehavior: ANALYSIS_HIGH except explicitly UNVERIFIED fields
- publicMorningNumbers: ANALYSIS_HIGH, definition = advantageous-section-entry common value, not reset-exclusive
