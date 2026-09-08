machineName: パチスロ ウィッチマスター
manufacturer: 山佐 / YAMASA
releaseDate: 2016-11-07
recordNumber: 1021
generation: 5号機 / 5.5号機期
systemType: A+ART / CZ / 分数管理型ART
formalModelName: ウィッチマスター／FF
certificationNumber: 6S0303
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2016-11-07、メーカー山佐、型式 `ウィッチマスター／FF`、検定番号 `6S0303` を確認。
- グリーンべると2016-09-15記事は11月上旬稼働開始予定、でちゃう!公開動画は最速導入日11月7日と明記。導入日は2016-11-07をcanonicalとする。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.0% |
| 3 | 101.1% |
| 4 | 104.5% |
| 5 | 108.8% |
| 6 | 113.8% |
- 一撃、スロットガーデン、期待値見える化で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | ART初当たり | ボーナス合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/550.7 | 1/799.2 | 1/499.5 | 1/326.0 |
| 2 | 1/564.9 | 1/682.6 | 1/479.6 | 1/309.1 |
| 3 | 1/520.1 | 1/780.1 | 1/485.0 | 1/312.0〜312.1 |
| 4 | 1/520.0 | 1/606.8 | 1/424.6 | 1/280.0 |
| 5 | 1/485.4 | 1/728.1 | 1/411.0 | 1/291.2 |
| 6 | 1/520.1 | 1/585.1 | 1/317.2 | 1/275.3 |
- HAZUSE、スロットガーデン、期待値見える化でほぼ一致。設定3ボーナス合算の312.0/312.1は丸め差として扱う。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- HAZUSE: 約31.5G/50枚。
- スロットガーデン、ちょんぼりすた: 約32G/50枚。
- 丸め差と判断し、canonicalは **約31.5〜32G/50枚**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「マジカルダイブ」: 約1.5枚/G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG: 約203枚。
- REG: 約49枚。
- ART初期ゲーム数: 40G + エピソード10G（最低50G相当）。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はCZまたはボーナス等からART「マジカルダイブ」を目指すA+ART機。
- ARTは分母となるベースカウントと残りARTゲーム数を使う分数管理型。
- 通常天井はBIG+ART間最大1536G、平均到達約999G。REGでは天井ゲーム数をリセットしない。
- 天井到達恩恵はART当選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_PARTIAL_INTERNAL_STATE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は通常時より優遇された周期テーブル（解析資料ではテーブル4 / 高テーブル）が選択され、天井到達ゲーム数が約半分へ短縮。
- 最大天井は1536G→768G、平均到達は約999G→約499〜500G。
- 高テーブル恩恵は初回ART当選まで継続する。
- 設定変更時の内部高確/CZ高確等の詳細初期状態は、当時解析でも「調査中」が残り、再探索後も固定できず UNVERIFIED_AFTER_RESEARCH。

### carryOverBehavior
- 据え置き時は天井ゲーム数/周期進捗を引き継ぐものとして扱う。純電源OFF→ON資料と整合。
- 内部高確/CZ高確等の詳細状態引継ぎは直接固定できず UNVERIFIED_AFTER_RESEARCH。

### powerCycleBehavior
- 電源OFF→ONのみでは天井ゲーム数を引き継ぐ。
- 内部状態は当時資料で調査中のため UNVERIFIED_AFTER_RESEARCH。

### gameCounterReset
- 設定変更: RESET_TO_RESET_SPECIFIC_TABLE / 最大768G系へ再構成。
- 据え置き・純電源OFF→ON: CARRYOVER。
- REG当選では天井ゲーム数をリセットしない。
- BIG当選ではその時点の天井ゲーム数自体はリセットされるが、設定変更後の高テーブル恩恵は初回ARTまで継続する。初期記事に混乱があるため、後の訂正情報・必勝本言及・メーカー資料言及を優先。

### ceilingAfterReset
- 通常: BIG+ART間 最大1536G / 平均約999G。
- 設定変更後: 最大768G / 平均約499〜500G。
- 初回ART当選まで高テーブルが継続。途中BIGでゲーム数は0から再計数されるが、高テーブル自体は継続。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONTEMPORARY_CORRECTION

### modeAfterReset
- 設定変更後は周期減算が最も優遇されるテーブル4（高テーブル）選択とする解析資料あり。
- 高テーブルは初回ARTまで継続。
- 通常時の全周期テーブル移行詳細はミッションv0.7の範囲外なので収集しない。

### stateAfterReset
- CZ高確/ART高確等の詳細状態初期値: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時ステージは学生街（昼）との当時解析報告あり。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 最大天井1536G→768G。
- 平均天井到達約999G→約499〜500G。
- 高テーブル恩恵が初回ARTまで継続するため、朝一の天井狙い価値が通常より高い。

### resetPenalties
- 前日天井進捗は設定変更で失われる。
- その他の設定変更固有不利は NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 当時解析では設定変更後ガックンあり、電源OFF→ONのみではなしとの報告。
- ただし通常時にもガックンする個体報告があり、個体差も示唆されるため確定判別には使用しない。
- classification: GACKUN_REPORTED_USEFUL_BUT_NOT_DETERMINISTIC / NOT_MANUFACTURER_GUARANTEE。

### numericResetData
- 通常最大天井: 1536G。
- 通常平均到達: 約999G。
- 設定変更後最大天井: 768G。
- 設定変更後平均到達: 約499〜500G。
- 設定変更後: 周期テーブル4 / 高テーブル選択。
- 高テーブル恩恵継続条件: 初回ART当選まで。

## dataQualityNotes
- 導入日、型式、検定番号はHAZUSEと当時業界/導入資料で整合。
- 機械割、BIG/REG/ART、ベース、ART純増、獲得枚数は複数解析で一致。
- ベース31.5Gと32Gは丸め差。
- リセット後BIG時の扱いは初期記事に訂正履歴がある。ゲーム数はBIGでリセット、高テーブルはARTまで継続、という後発訂正をcanonicalとした。
- 内部状態の設定変更/電断時処理は当時資料でも「調査中」が残るため推測で補完しない。

## conflicts
- RESET_BIG_HANDLING_EARLY_REPORT_CORRECTED: 初期記事に「BIGでも恩恵/ゲーム数継続」と読める記載があったが、後に「BIGで天井ゲーム数はリセット、高テーブルは初回ARTまで継続」へ訂正。訂正後をcanonical、訂正履歴を品質注記として保持。

## missingFields
- 設定変更時のCZ高確/ART高確等、詳細内部状態初期値: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の詳細内部状態: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. HAZUSE — パチスロ ウィッチマスター（導入日、型式、検定番号、基本スペック、ベース、ART）
   - https://hazuse.com/machine/pachislot/6S0303/
   - https://hazuse.com/machine/pachislot/6S0303/genre/201/
   - https://hazuse.com/machine/pachislot/6S0303/genre/209/
2. グリーンべると — オリジナルコンテンツ「ウィッチマスター」を披露（2016-09-15、11月上旬稼働予定）
   - https://news.p-world.co.jp/articles/8658/greenbelt
3. でちゃう! WEBちゃんねる — 「パチスロ ウィッチマスター」の打ち方&ゲーム性紹介（最速導入日2016-11-07）
   - https://www.youtube.com/watch?v=nvtG9qlHw4M
4. 一撃 — ウィッチマスター（機械割、ボーナス+ART合算）
   - https://1geki.jp/slot/s_witchmasters/
5. 一撃 — 天井/設定変更（最大1536G、リセット最大768G/平均499G、電源OFF→ON引継ぎ）
   - https://1geki.jp/slot/s_witchmasters/3/
6. スロットガーデン — 天井・リセット恩恵・スペック（テーブル4、平均500G、約32G/50枚）
   - https://xn--mckza4ard4ttb2d.com/witchmaster
7. 期待値見える化 — 天井・朝一リセット（最大768G、平均約500G、初回ARTまで恩恵継続）
   - https://slotjin.com/zone/witchmaster/
   - https://slotjin.com/slot/witchmaster-reset/
8. すろぱちくえすと — 設定変更・リセット時の恩恵・ガックン・訂正履歴
   - https://www.slopachi-quest.com/article/witch-master-reset/
9. ちょんぼりすた — ウィッチマスター解析（約32G/50枚、スペック）
   - https://chonborista.com/slot/yamasa-slot/25897/comment-page-6/
10. パチスロ解析ガイド — ウィッチマスター（BIG約203枚、REG約49枚、ART約1.5枚/G、天井）
   - https://pachislot-guide.net/2016/witch-master/
