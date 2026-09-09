machineName: パチスロ 黒神 The Animation
manufacturer: オリンピア
releaseDate: 2017-05-22
recordNumber: 1083
generation: 5号機 / 5.5号機
systemType: ART / ボーナス非搭載 / BGB経由ゲーム数上乗せ型
formalModelName: パチスロ黒神／K2
certificationNumber: 7S0110
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_CONFLICT

## identity
- HAZUSEで型式 `パチスロ黒神／K2`、検定番号 `7S0110`、メーカー オリンピア、導入開始日2017-05-22を直接確認。
- K-Navi、一撃、ちょんぼりすたでも2017-05-22ホール導入で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE_AND_IDENTITY

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|97.6%|
|2|98.7%|
|3|100.0%|
|4|103.2%|
|5|105.1%|
|6|110.2%|
- HAZUSE、一撃、ちょんぼりすた等で一致。精密値を掲載する解析では97.55 / 98.67 / 100.03 / 103.21 / 105.07 / 110.21%。丸め差として分離。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり合算
|設定|ART初当たり|
|---:|---:|
|1|1/175.34|
|2|1/172.57|
|3|1/166.00|
|4|1/155.80|
|5|1/149.49|
|6|1/138.45|
- K-Navi/P-WORLD/一撃の丸め値 1/175.3〜1/138.5 と整合。
- 確定役以外のBGB当選は設定1 1/177.23〜設定6 1/139.63。黒神揃い・紫7揃いは各1/32768で、合算値とは定義を分ける。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約46〜48G/50枚（HAZUSE、当時解析）。
- ちょんぼりすたは約46G/50枚。範囲値と代表値の定義差として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「黒神遊戯」: 約1.8枚/G。
- P-WORLD、HAZUSE、一撃、ちょんぼりすた、当時解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- リアルボーナス非搭載。
- ART「黒神遊戯」はブラックゴッド・バトルで初期/追加ゲーム数を獲得して消化するゲーム数上乗せ型。
- 当時解析では黒神遊戯は30G以上。
- ブラックゴッド・バトルは初回チャレンジラウンド突破率約30%、突破後は75%以上で継続し、その都度ゲーム数を上乗せ。
- ブラックゴッド・インパクトは1セット7G+αのST式特化ゾーン、平均上乗せ約400G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常ゲーム数天井: 通常時467G消化 + 最大33G前兆（実質最大500G）でブラックゴッド・バトル突入。
- バトル初戦敗北回数天井: 通常時は9連続敗北後、10回目BGBで初戦勝利確定。
- 設定変更時はこの回数天井が最大6回に短縮。
- 通常時には低確/高確/超高確の内部状態、テラカウンター、マイナスポイントが存在。
- 通常時全状態移行率やART中詳細抽選は物差し用途外のため収集しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_NUMERIC_RESET_DATA_AND_STATE_CONFLICT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ゲーム数天井: RESET。
- バトル初戦敗北回数天井: RESETして再抽選、最大6回。
- テラカウンター: RESET。
- マイナスポイント: RESELECT。
- 液晶ステージ: 朝一基本ステージへ移行（資料によりエクセル&シュタイナー固定、またはエクセル&シュタイナー/慎吾&水華魅の2候補表記）。
- 内部状態は資料競合。すろぱちくえすと/ちょんぼりすた/SLOT HACKは設定変更時RESELECTを明記し、公開振り分け61.7/33.2/5.1%を掲載。一撃は設定変更時も「状態:引き継ぐ」と記載。平均化せずCONFLICT。
reliability: ANALYSIS_HIGH_FOR_COUNTERS_AND_BATTLE_CEILING; CONFLICT_FOR_INTERNAL_STATE

### carryOverBehavior
- 据え置き時は設定変更処理がないため、前日ゲーム数・BGB敗北回数天井等の宵越し対象となるが、本機固有の「据え置き」独立比較表よりも電源OFF→ON表が主資料。
- 客側判別では「朝一からBGB初戦敗北7連以上」は設定変更後最大6回と矛盾するため据え置き超濃厚と解析される。
reliability: ANALYSIS_HIGH_FOR_BATTLE_COUNT_DETECTION; ANALYSIS_HIGH_FROM_POWER_CYCLE_TABLE_FOR_GAME_COUNT

### powerCycleBehavior
- ゲーム数天井: 内部CARRYOVER。液晶表示ゲーム数はクリア。
- バトル規定回数: CARRYOVER。
- 内部状態: CARRYOVER（複数解析一致）。
- マイナスポイント: CARRYOVER。
- テラカウンター: 内部的にCARRYOVERするが表示上は消える。一撃では表面上3つ点灯しない限り共存均衡カウンターへ移行しない旨まで記載。
- 液晶ステージは朝一基本ステージへ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- settingChange: RESET_FROM_467G_PLUS_MAX33G_CEILING_PROGRESS。
- powerOffOn: INTERNAL_CARRYOVER_DISPLAY_CLEARED。
- battleFailureCountCeiling: RESET_ON_SETTING_CHANGE / CARRYOVER_ON_POWER_CYCLE。

### ceilingAfterReset
- ゲーム数天井自体は通常と同じ467G+最大33G前兆で、ゲーム数天井の短縮はNONE_CONFIRMED。
- BGB初戦敗北回数天井は通常最大10回目勝利確定 → 設定変更後最大6回目勝利確定へ短縮。これは主要な朝一恩恵。

### modeAfterReset
- BGB初戦連続敗北天井回数をRESELECT（1〜6回）。設定別公開振り分けあり。
- 設定変更専用の別ゲーム数モードはNONE_CONFIRMED_AFTER_RESEARCH。

### stateAfterReset
- CONFLICT_STATE_AFTER_SETTING_CHANGE。
- 系統A（すろぱちくえすと/ちょんぼりすた/SLOT HACK）: RESELECT。低確61.7%、高確33.2%、超高確5.1%（全設定共通として掲載）。
- 系統B（一撃、2017-05-20更新）: CARRYOVER。
- 純電源OFF→ONはCARRYOVERで複数資料一致。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- BGB敗北回数天井が最大10回→最大6回へ短縮。
- 内部状態RESELECT説を採る資料では高確以上38.3%（高確33.2%+超高確5.1%）スタート。ただし状態引継ぎ説とのCONFLICTがあるため、確定恩恵として単独採用しない。
- マイナスポイントは設定変更時再抽選。10pt選択42.97%が最多で、20pt到達でマイナスルート発動。

### resetPenalties
- ゲーム数天井進捗はRESETするため、前日ハマリの宵越し価値を失う。
- テラカウンターはRESET。
- その他の設定変更専用冷遇はNONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 朝一、前日+当日で内部天井相当500Gを超える挙動が確認できる場合は設定変更側の判別材料になると当時解析。
- 朝一BGB初戦敗北が7連以上なら、設定変更後最大6回の仕様上、据え置き超濃厚。
- ガックン動画/判別情報は存在するが、当時解析では「非常に判別が難しい」「ほぼ使えない」と評価。SLOT HACKはガックン判別有効だが難易度高めとするため、確定判別にはしない。
reliability: ANALYSIS_HIGH_FOR_BATTLE_COUNT; CONFLICT/LOW_PRACTICALITY_FOR_GAKKUN

### numericResetData
- resetStateDistribution_RESELECT_SOURCE: 低確61.7% / 高確33.2% / 超高確5.1%。
- resetMinusPointDistribution: 2pt 10.94% / 4pt 10.94% / 6pt 10.94% / 8pt 10.94% / 10pt 42.97% / 12pt 10.94% / 14pt 1.17% / 16pt 0.78% / 18pt 0.39%。
- resetBattleFailureCeilingDistribution:
  - 設定1: 1回10.2 / 2回5.1 / 3回40.2 / 4回5.1 / 5回10.2 / 6回29.3%。
  - 設定2: 1回10.2 / 2回10.2 / 3回35.2 / 4回10.2 / 5回5.1 / 6回29.3%。
  - 設定3: 1回5.1 / 2回10.2 / 3回40.2 / 4回5.1 / 5回10.2 / 6回29.3%。
  - 設定4: 1回12.5 / 2回12.5 / 3回35.2 / 4回10.2 / 5回5.1 / 6回24.6%。
  - 設定5: 1回15.2 / 2回5.1 / 3回40.2 / 4回5.1 / 5回10.2 / 6回24.2%。
  - 設定6: 1回20.3 / 2回15.2 / 3回34.0 / 4回10.2 / 5回5.1 / 6回15.2%。
- standardGameCeiling: 467G + max33G前兆（最大500G）。
- resetGameCeiling: 同値、進捗RESET。
- standardBattleFailureCeiling: 10回目BGB初戦勝利確定。
- resetBattleFailureCeiling: 最大6回目BGB初戦勝利確定。

## conflicts
- CONFLICT_STATE_AFTER_SETTING_CHANGE:
  - RESELECT + 低確61.7 / 高確33.2 / 超高確5.1%: すろぱちくえすと、ちょんぼりすた、SLOT HACK。
  - CARRYOVER: 一撃。
- 朝一液晶ステージは「エクセル&シュタイナー固定」と「エクセル&シュタイナー or 慎吾&水華魅」の表記差あり。ゲーム性への影響は小さいため表示契約CONFLICTとして保持。
- 機械割97.6等と精密97.55等は丸め差でありMATERIAL CONFLICTではない。

## missingFields
- setting-change internal state definitive contract: CONFLICT_AFTER_MULTI_SOURCE_RESEARCH
- deterministic gakkun reset detection: NO_RELIABLE_DETERMINISTIC_CONTRACT

## sources
取得日: 2026-09-09
1. HAZUSE — https://hazuse.com/machine/pachislot/7S0110/
2. HAZUSE ART解析 — https://hazuse.com/machine/pachislot/7S0110/genre/209/
3. K-Navi — https://p-kn.com/slot/2770/
4. P-WORLD — https://www.p-world.co.jp/machine/database/8347
5. 一撃 基本情報 — https://1geki.jp/slot/s_kurokami_theanime/
6. 一撃 天井/設定変更 — https://1geki.jp/slot/s_kurokami_theanime/3/
7. ちょんぼりすた — https://chonborista.com/slot/orinpia-slot/35618/
8. すろぱちくえすと — https://www.slopachi-quest.com/article/kurokami/
9. すろかい（当時解析） — https://slotkaiseki.hatenablog.com/entry/kurokami
10. SLOT HACK リセット機一覧 — https://slothack.net/matome/3346/
