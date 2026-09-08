machineName: 麻雀格闘倶楽部2
manufacturer: KPE
releaseDate: 2016-12-19
recordNumber: 1035
generation: 5号機 / 5.5号機期
systemType: A+ART / 周期抽選 / CZ
formalModelName: 麻雀格闘倶楽部2／KA
certificationNumber: 6S0920
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- KPE製「麻雀格闘倶楽部2」。KONAMIアーケード版や2023年スマスロ「麻雀格闘倶楽部 覚醒」等の後継機とは分離する。
- KONAMI公式動画で2016年12月稼働開始を確認。HAZUSE、ALL7、当時解析複数でホール導入開始2016-12-19を確認。
- HAZUSEで型式名「麻雀格闘倶楽部2／KA」、検定番号「6S0920」を確認。
reliability: OFFICIAL_PLUS_INDUSTRY_ANALYSIS_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.4% |
| 3 | 100.2% |
| 4 | 103.1% |
| 5 | 106.2% |
| 6 | 110.1% |

- 2016-10-14のPiDEA X機械選定記事、期待値見える化、当時解析で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「格闘倶楽部RUSH」初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/297.0 |
| 2 | 1/276.5 |
| 3 | 1/285.8 |
| 4 | 1/245.8 |
| 5 | 1/249.9 |
| 6 | 1/228.7 |

### リアルボーナス「俺の強運」
- 全設定共通: 1/213.0。
- HAZUSE、PiDEA X、複数当時解析でART初当たり系列を照合。ボーナス1/213はPiDEA X・複数解析一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 解析一般値: 約37.0G / 50枚。
- PiDEA Xの導入前機械選定資料: 設定1 約40G / 50枚。
- 定義/算出条件差の可能性があるため平均せず両方を保持する。
reliability: CONFLICT_OR_CONDITION_DIFFERENCE_INDUSTRY_VS_ANALYSIS

## netIncrease
- ART「格闘倶楽部RUSH」: ボーナス込み約2.0枚/G。
reliability: OFFICIAL_CONTEXT_PLUS_INDUSTRY_ANALYSIS_MULTI_SOURCE

## basicPayout
- リアルボーナス「俺の強運」: 9G継続、約54枚。
- ART「格闘倶楽部RUSH」: 初期40〜480G。和了役・親/子により初期G数が変動するゲーム数上乗せ型。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はリアル対局システムによる周期管理。1周期平均約40G。
- ART当選契機は周期抽選、自力CZ等。
- CZ「霊獣チャレンジ」: 10G、ART期待度約33%。
- CZ「昇龍チャレンジ」: 8G、ART期待度約43%。
- 通常天井は最大33周期。1周期平均約40Gのため約1320〜1350Gが目安で、到達時ART確定。
- 周期天井振り分けは1/2/3/5/7/11/22/33周期に存在し、設定別公開値あり。ただし通常時全周期テーブルはresetBehaviorの物差し必須範囲外なので、リセット専用値でないものはレコード本体では最小限保持する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_DIRECT_CARRYOVER_GAP
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は天井をRESET。
- 周期状態は1周期目から再スタート。
- リセット時もART終了後と同様に1周期目からスタートし、当時解析では特別なリセット恩恵なしと評価されている。
- 朝一基本液晶は富士山ステージの対局開始画面。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### carryOverBehavior
- 「据え置き」と明記した本機固有の独立比較表は、機種名/型式/KPE/シリーズ名と「据え置き・設定変更・朝一・周期・天井・電源OFF ON」を組み替えて再探索したが直接固定できず `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
- 純電源OFF→ONについては天井・周期状態引継ぎの直接表が存在するため、設定を変更しない電断契約は別項で確定している。そこから据え置きを推測補完はしない。
reliability: UNVERIFIED_FOR_EXPLICIT_CARRYOVER / ANALYSIS_HIGH_FOR_POWER_CYCLE

### powerCycleBehavior
- 純電源OFF→ON: 天井を引き継ぐ。
- 周期状態を引き継ぐ。
- 液晶は基本富士山から開始。ただしART中/特殊ステージ滞在中に電断した場合はステージを引き継ぐとする直接注記あり。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### gameCounterReset
- 本機は固定G数より周期進捗が主要管理単位。
- 設定変更: 周期進捗RESET、1周期目へ。
- 純電源OFF→ON: 周期進捗CARRYOVER。
- 据え置き単独の直接表現: `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_CHANGE_POWER / UNVERIFIED_FOR_EXPLICIT_CARRYOVER

### ceilingAfterReset
- 通常天井: 最大33周期（約1320〜1350G目安）、ART確定。
- 設定変更後も1周期目から通常の周期天井契約で開始し、専用短縮天井・リセット専用優遇周期は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 当時解析では「特に恩恵はありません」とされる。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 本機で朝一専用の通常モード振り分け、リセット専用チャンス周期選択率等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時に3/7/11/22周期等のチャンス周期・周期天井振り分けは存在するが、これをリセット専用モードと混同しない。
reliability: ANALYSIS_RESEARCH_EXHAUSTED

### stateAfterReset
- RT状態はRT1/RT2/RT3が公開されているが、設定変更時に各RT状態をどう初期化するかを直接示す本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。
- 内部のイベント/CZ状態についても設定変更専用初期振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更専用の短縮天井、専用高確率モード、専用初当たり優遇数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 当時解析上は「リセット時もART終了後と同様に1周期目からスタートし、特に恩恵なし」。
reliability: ANALYSIS_HIGH_DIRECT_RESET_GUIDE

### resetPenalties
- 前日の周期進捗は設定変更で失われ、1周期目へ戻る。前日が22周期や33周期等の深い位置なら据え置き時に残り得る価値を設定変更で消す方向に働く。
- それ以外の設定変更専用不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_COUNTER / RESEARCH_FOR_OTHER_PENALTIES

### resetDetection
- 朝一の液晶は設定変更・通常の純電断とも基本富士山ステージとなるため、液晶単独でのリセット判別は不可。
- 2016-12-26公開の実機ガックン動画が存在。当時解析では右リールが僅かにブレるものの「実用的なレベルではなさそう」と評価。
- 客AI上は `GACKUN_REPORTED_BUT_PRACTICALLY_WEAK_NOT_RELIABLE` とする。メーカー保証の確定判別契約にはしない。
reliability: ANALYSIS_SINGLE_DIRECT_VIDEO_PLUS_ANALYSIS_CONTEXT

### numericResetData
- リセット専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。
- リセット専用モード振り分け: NONE_CONFIRMED_AFTER_RESEARCH。
- 朝一特定G/周期以内の専用当選率: NONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更後は1周期目から開始。通常の周期天井振り分けはリセット専用値ではないためnumericResetDataには転記しない。

## dataQualityNotes
- 「麻雀格闘倶楽部2」「麻雀格闘倶楽部2／KA」「KPE」「KONAMI」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / 周期状態 / モード / RT / ガックン」を組み替え、公式動画・HAZUSE・ALL7・PiDEA X・当時解析・旧攻略記事・実機動画を横断した。
- 2023年スマスロ「麻雀格闘倶楽部 覚醒」の160G+αリセット優遇、有利区間、モード再抽選等は別機種なので本レコードへ混入させていない。
- ベースは37G/50枚と40G/50枚（設定1）で資料差がある。平均せず条件差/CONFLICT候補として保持。
- 通常天井のG数換算は1周期の長さが不定なので約1320〜1350Gは目安。canonical契約は33周期。

## conflicts
- `BASE_GAMES_PER_50_ANALYSIS_37_0_VS_INDUSTRY_PRELAUNCH_40`
  - 当時解析複数: 約37.0G/50枚。
  - PiDEA X 2016-10-14機械選定資料: 設定1 約40G/50枚。
  - 定義/試打条件差の可能性があるため平均せず保持。
- `RELEASE_SCHEDULE_PRELAUNCH_VS_HALL_START`
  - PiDEA X 2016-10-14記事は「納品12/4〜」と記載。
  - KONAMI公式は2016年12月稼働開始、HAZUSE/ALL7/複数当時解析はホール導入2016-12-19で一致。本DBのreleaseDateはホール導入基準で2016-12-19をcanonicalとする。

## missingFields
- 据え置きと明記した独立した本機固有天井/周期比較表: UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH。純電源OFF→ON引継ぎは直接資料あり。
- 設定変更時RT状態の初期化詳細: UNVERIFIED_AFTER_RESEARCH。
- リセット専用公開数値: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09

1. KONAMIアミューズメント公式YouTube — パチスロ「麻雀格闘倶楽部2」実機解説（2016-10-07）
   - https://www.youtube.com/watch?v=qiRyQ87raNo
2. HAZUSE — 麻雀格闘倶楽部2 / 型式・検定・導入日・ART初当たり
   - https://hazuse.com/machine/pachislot/6S0920/
3. ALL7 — 2016年12月導入予定一覧
   - https://www.all7.jp/plans/index/2016/12
4. PiDEA X — 三木流、「麻雀格闘倶楽部2」の評価は？（2016-10-14）
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%80%8C%E9%BA%BB%E9%9B%80%E6%A0%BC%E9%97%98%E5%80%B6%E6%A5%BD%E9%83%A82%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
5. 期待値見える化 — 麻雀格闘倶楽部2 天井/ゾーン/朝一リセット
   - https://slotjin.com/zone/mfc2/
6. ちょんぼりすた — 麻雀格闘倶楽部2 スロット解析
   - https://chonborista.com/slot/kpe-slot/27152/
7. すろぱちくえすと — 麻雀格闘倶楽部2 天井/スペック
   - https://www.slopachi-quest.com/article/majang-fightclub2/
8. すろぱちくえすと — 麻雀格闘倶楽部2 打ち方/ボーナス
   - https://www.slopachi-quest.com/article/majanfight2-reel/
9. pachislo-data — 麻雀格闘倶楽部2解析
   - https://pachislo-data.com/kpe/30227
10. YouTube — 麻雀格闘倶楽部2 リールガックン動画（2016-12-26）
   - https://www.youtube.com/watch?v=XuyX-Uqxsuw
