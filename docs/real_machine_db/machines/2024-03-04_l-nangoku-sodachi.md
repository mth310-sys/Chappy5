# L南国育ち

recordNo: 1630
machineName: L南国育ち
aliases: スマスロ南国育ち / 南国育ち（スマスロ） / L南国育ちS3
manufacturer: オリンピアエステート（平和）
formalModel: L南国育ちS3
inspectionCode: 330497
releaseDate: 2024-03-04
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス連チャン・モード管理
settings: L / 1 / 2 / 3 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 平和の販売発表を扱うAmusement Japan、遊技通信/P-WORLD、遊技日本、グリーンべるとで2024-03-04導入予定が一致。
- P-WORLD/HAZUSE/主要解析でも2024-03-04導入開始を確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技通信・遊技日本・公安委員会検定通過記事で型式 `L南国育ちS3`、製造元オリンピアエステートを確認。
- HAZUSEで型式 `L南国育ちS3`、検定番号 `330497` を確認。
confidence: INDUSTRY_FOR_MODEL / ANALYSIS_HIGH_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.9%
- setting3: 101.6%
- setting5: 106.0%
- setting6: 110.0%
- settingL: 公開固定値確認できず
initialHitBySetting:
- setting1: ボーナス初当り 1/299.8
- setting2: ボーナス初当り 1/291.0
- setting3: ボーナス初当り 1/267.3
- setting5: ボーナス初当り 1/238.6
- setting6: ボーナス初当り 1/208.8
- settingL: 公開固定値確認できず
baseGamesPer50: 約31.2G/50枚
netIncrease:
- 疑似ボーナス: 約6.0枚/G
basicPayout:
- 青7BIG: 平均約240枚 + BIG 1G連濃厚
- 赤7BIG: 平均約230枚
- REG: 平均約85枚
- ボーナス後: 8Gのバタフライゾーン。1G連非当選時も32Gのときめきゾーンへ移行
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレア役・モード天井等から疑似ボーナスを目指す。
- 通常A/通常B/初代の天井は996G、引き戻し/チャンスは200G、必翔および飛翔A/B/超飛翔は32G。
- 通常Bは飛翔モード移行まで転落なし。設定変更時のみ選ばれるチャンスモードが存在。
- 飛翔A/Bは1G連を軸とする連チャンモード、超飛翔は約93%ループ。
- 設定変更時のモード再抽選は通常A 30.0% / 通常B 50.0% / チャンス20.0%（全設定共通として主要解析で一致）。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_DISPLAY_COUNTER
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井までの内部ゲーム数をRESET。
- 内部モードを再抽選。
- 設定変更時のモード振り分けは通常A 30.0% / 通常B 50.0% / チャンス20.0%。
- チャンスは設定変更時のみ移行可能な200G天井モード。
- 通常A/Bは996G天井のため、設定変更で全台一律に天井が短縮される仕様ではない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは天井までの内部ゲーム数をCARRY_OVER。
- 内部モードをCARRY_OVER。
- 有利区間をCARRY_OVER。
- 前日のモード/天井進行が内部的に継続するため、前日履歴との整合は据え置き推測材料になる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ONでは、天井までの内部ゲーム数をCARRY_OVER。
- 内部モードをCARRY_OVER。
- 有利区間をCARRY_OVER。
- 朝一の液晶/データ表示が内部ゲーム数をどの粒度で復元・表示するかについて、機種固有の確定契約は十分な再探索後も固定できず、外部データカウンター挙動と混同しない。
confidence: ANALYSIS_HIGH_FOR_INTERNAL_CARRY_OVER / UNVERIFIED_AFTER_RESEARCH_FOR_DISPLAY_COUNTER

### gameCounterReset
- 通常A/通常B/初代: 996G天井。
- 引き戻し/チャンス: 200G天井。
- 必翔/飛翔A/飛翔B/超飛翔: 32G天井。
- 設定変更: 内部天井進行RESET。
- 据え置き/純電断: 内部天井進行CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 設定変更後に一律の固定短縮天井は確認されない。
- 設定変更時20.0%で選択されるチャンスモードは200G天井。
- 通常A 30.0% / 通常B 50.0%を選択した場合は996G天井。
- よって朝一恩恵は「20%で200G天井モード」として扱い、「996G→200Gへ一律短縮」とは記録しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時: 通常A 30.0% / 通常B 50.0% / チャンス20.0%。
- 据え置き/純電断: 前日内部モードをCARRY_OVER。
- チャンスは設定変更時の一部でのみ移行し、ボーナス当選後に飛翔へ移行しなかった場合は通常Bへ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 本機では朝一挙動を左右する主要公開内部状態はモード管理として把握できる。
- モードとは別の独立した通常/高確/超高確等について、設定変更と電断を直接比較できる公開契約は主要資料で確認できず、存在を推測補完しない。
confidence: NOT_SEPARATELY_APPLICABLE_FROM_PUBLIC_MODE_DATA / UNVERIFIED_AFTER_RESEARCH_FOR_ANY_SEPARATE_STATE

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 設定変更後以外の有利区間移行時は通常B 20.0% / 必翔80.0%という別テーブルが公開されているため、設定変更時の30/50/20テーブルと混同しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 設定変更時20.0%で200G天井のチャンスモードへ移行。
- 設定変更時50.0%で通常Bへ移行。通常Bは飛翔モード移行まで転落なしで、ボーナス当選時に約50%で飛翔へ移行するため、通常Aより朝一価値が高い。
- 合計70.0%が通常A以外（通常Bまたはチャンス）から開始。
- 設定変更時専用チャンスモードの存在が朝一狙いの主要根拠。
confidence: ANALYSIS_HIGH

### resetPenalties
- 据え置きなら維持される前日天井進行・内部モードが設定変更では消去/再抽選されるため、前日が深いハマリや有利なモードだった場合はリセットが不利になり得る。
- 設定変更専用の固定マイナス抽選率・ペナルティ数値は主要資料で確認できず。
confidence: ANALYSIS_HIGH_FOR_LOSS_OF_CARRY_OVER / PUBLIC_VALUE_NOT_FOUND_FOR_FIXED_NUMERIC_PENALTY

### resetDetection
- 前日最終ゲーム数と当日ボーナス当選位置、設定変更専用モード振り分けとの整合が推測材料。
- 朝一200G以内の当選だけでは、通常の引き戻し等も存在するため設定変更確定にはしない。
- 設定変更/純電断後の液晶ゲーム表示・外部データカウンターを使った確定判別条件は、機種固有の主要解析で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックンは `L南国育ち / スマスロ南国育ち / L南国育ちS3 / オリンピアエステート / 平和` × `ガックン / リール / 設定変更 / リセット / 据え置き / 朝一 / 電源OFF ON` で再探索したが、一次/主要解析で条件・発生率を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_MODE_AND_CARRY_OVER_INFERENCE / UNVERIFIED_AFTER_RESEARCH_FOR_GACKUN_AND_DISPLAY

### numericResetData
- 設定変更時モード振り分け（全設定共通）:
  - 通常A: 30.0%
  - 通常B: 50.0%
  - チャンス: 20.0%
- 通常A/B天井: 996G。
- チャンス天井: 200G。
- 設定変更後、通常A以外から開始する割合: 70.0%。
- 設定変更後、200G天井モードから開始する割合: 20.0%。

### publicMorningNumbers
- 通常A 30.0% / 通常B 50.0% / チャンス20.0%。
- チャンスモード天井200G。
- 一律天井短縮ではない。

## missingFields
- 設定変更/電断時の液晶・外部データ表示の機種固有確定契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- モードとは別の独立内部状態の設定変更/電断比較: UNVERIFIED_AFTER_RESEARCH / NOT_SEPARATELY_PUBLISHED
- 設定Lの機械割・初当り固定値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 純増について、平和発表を扱うAmusement Japan・遊技日本・グリーンべると・なな徹・HAZUSE等は約6.0枚/Gで一致。一部低優先度二次資料に約5.0枚/G表記があるため、平均せず `LOW_AUTHORITY_CONFLICT` として保持し、canonicalは一次/業界・主要解析一致の約6.0枚/G。
- 通常天井は必勝本・一撃・ぽこすろっと等で996Gが一致。一部二次資料に966G表記があるが、複数高優先資料との不一致が大きいため `LOW_AUTHORITY_CONFLICT / LIKELY_TYPO` として保持し、canonicalは996G。

## sources
取得日: 2026-09-14

### 公式/業界・型式/導入
- Amusement Japan — 南国育ちがスマスロで復活｜平和: https://www.amusement-japan.co.jp/article/detail/10004061/
- P-WORLD業界ニュース（遊技通信）— 南国の蝶がスマスロで甦る「L南国育ち」: https://news.p-world.co.jp/articles/26591/yugitsushin
- 遊技日本 — L南国育ち発表: https://yugi-nippon.com/pachinko-new-machine/post-62502/
- グリーンべると — 『南国育ち』王道のゲーム性がスマスロで復活！: https://web-greenbelt.jp/post-79796/
- P-WORLD業界ニュース（遊技日本）— L南国育ちS3 が検定通過: https://news.p-world.co.jp/articles/26413/nippon
- グリーンべると — L南国育ちS3検定通過を含む高知県公安委員会公示: https://web-greenbelt.jp/post-79367/

### 性能コア
- なな徹 — 初当たり確率/機械割/50枚ベース: https://nana-press.com/kaiseki/machine/703/19013/
- なな徹 — ボーナス基本概要: https://nana-press.com/kaiseki/machine/703/19747/
- HAZUSE — 型式/検定番号/スペック: https://hazuse.com/machine/pachislot/SX0067/
- P-WORLD — L南国育ち: https://www.p-world.co.jp/machine/database/9983
- ちょんぼりすた — スマスロ南国育ち解析: https://chonborista.com/slot/orinpia-slot/205447/

### resetBehavior / モード / 天井
- 必勝本 — モード移行抽選: https://hisshobon.com/machineinfo/82861/
- 必勝本 — 通常時解説: https://hisshobon.com/machineinfo/82868/
- 一撃 — 天井とやめどき/朝一: https://1geki.jp/slot/l_nangoku_sdc/3/
- 一撃 — モードの特徴/天井: https://1geki.jp/slot/l_nangoku_sdc/42/
- ぽこすろっと — 天井/朝一/設定変更/モード/有利区間: https://www.nankaikoya.jp/nangokusodachi-kitaichi/
- スロット期待値見える化 — 天井/設定変更/モード: https://www.slopachi-quest.com/article/lnangokusodachi-tenjou/

## qaNotes
- 2026年機 `L南国育ち SPECIAL` は別型式・別機種。検索結果混入が多いため、2024年 `L南国育ちS3` の資料のみをcanonicalへ使用。
- `チャンス以上70%` という2026年SPECIALの表現は2024年機へ流用していない。2024年機は通常A30% / 通常B50% / チャンス20%という独自テーブル。
- 有利区間移行時の通常B20% / 必翔80%は「設定変更後以外」のテーブルであり、朝一設定変更へ流用しない。
