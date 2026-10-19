# サマージャンボ ～あの夏のチケットの行方～

machineName: サマージャンボ ～あの夏のチケットの行方～
manufacturer: JPS（ジェイピーエス）
releaseDate: 2015-07-27
releaseDatePrecision: exact_nationwide_start_day
releaseDateNote: K-Naviは全国一斉導入開始日を2015-07-27、ALL7は導入予定2015-07-27とする。PiDEAは納品予定日2015-07-26。納品日と実ホール導入日を分離し、canonicalは2015-07-27。
generation: 5号機
systemType: AT / 新基準高ベースAT / 特殊設定0搭載
formalModelName: サマーあの夏のチケットの行方ジャンボAA
inspectionDateTokyo: 2015-06-15
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_PUBLIC_DATA

## identity

- メーカー: **JPS（ジェイピーエス）**。
- 型式名: **サマーあの夏のチケットの行方ジャンボAA**。PiDEAの2015-06-05機械説明会記事、および後年の業界リストで一致。
- 東京都検定年月日: **2015-06-15**（全日遊連系の高射幸性遊技機リスト掲載資料）。
- canonical導入日: **2015-07-27**。K-Naviは全国一斉導入開始日として同日、ALL7も同日予定。PiDEAの2015-07-26は納品予定日のため別定義で保持。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## payoutRateBySetting

本機は通常の設定3を持たず、**設定0 / 1 / 2 / 4 / 5 / 6**の6段階構成。設定0は特殊設定だが、公開された通常比較用のAT初当たり・PAYOUT値を今回固定できない。

| 設定 | 機械割 / PAYOUT |
|---:|---:|
| 0 | UNVERIFIED_SPECIAL_SETTING |
| 1 | 95.74% |
| 2 | 97.13% |
| 4 | 99.94% |
| 5 | 103.23% |
| 6 | 108.48% |

- パチマガスロマガの独自調査値をcanonical精密値として採用。
- ちょんぼりすた / pacnk は丸めて 95.7 / 97.1 / 99.9 / 103.2 / 108.5%。スロット日報は設定6を108.4%とするため、設定6の小差は `CONFLICT_MINOR_ROUNDING_108_48_VS_108_4_108_5` として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_ROUNDING_CONFLICT

## initialHitBySetting

主要初当たりはAT初当たり。

| 設定 | AT初当たり |
|---:|---:|
| 0 | UNVERIFIED_SPECIAL_SETTING |
| 1 | 1/307.1 |
| 2 | 1/292.6 |
| 4 | 1/250.2 |
| 5 | 1/213.9 |
| 6 | 1/195.2 |

- パチマガスロマガ独自調査値。複数解析資料が同値または丸め値で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **CONFLICT: 約52G/50枚 vs 約48G/50枚**。
- PiDEAの2015-06-05プレス向け機械説明会記事は **千円当たり52G**。
- スロット日報も **約52G/50枚**。
- ちょんぼりすたは **約48G/50枚**。
- 公式一次ページを今回固定できないため平均化せず、業界発表系の52Gを `industry_presentation_value`、後年解析の48Gを `analysis_value` として併記。
- confidence: CONFLICT_INDUSTRY_VS_ANALYSIS

## netIncrease

- AT純増: **約2.6枚/G**。
- PiDEA、P-WORLD、パチマガスロマガで一致。
- 一部解析に約2.5枚/G表記があるため、業界発表・P-WORLD一致の2.6枚/Gをcanonicalとし、2.5枚/Gは丸め/実戦表記候補として保持。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## basicPayout

- 「カウントダウンサマー」: **7G**。
- 「ジャンBONUS」: **33G以上**。
- 「BIGジャンBONUS」: **111G以上**。
- P-WORLDで3種ATの基本ゲーム数を確認。
- AT「ジャンBONUS」はPiDEA / パチマガスロマガでも1セット33G以上として一致。
- confidence: INDUSTRY_DATABASE_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ATは純増約2.6枚/G。
- 通常時のH揃いでハッピーチケットを獲得。3枚以上でGOGO SUMMERチャレンジに任意挑戦でき、公開期待度は **3枚33% / 4枚66% / 5枚100%**。
- 第一天井: **AT後799G**。到達時 **50%でAT当選**。
- 第二天井: **AT後1499G**。AT当選 + 初期ゲーム数/振り分け優遇。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_UNVERIFIED_POWER_CYCLE_AND_INTERNAL_STATE_CONTRACT
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 後年整理資料pacnkは、**設定変更後は天井ゲーム数が再抽選される**と記載。
- ただし「0Gから通常799/1499Gをそのまま進む」のか、リセット専用の開始G/天井振り分けが存在するのか、その具体テーブルは今回の再探索で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ハッピーチケット所持数、前兆、内部抽選状態が設定変更でどのように処理されるかも本機固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置き時のAT間天井G数、ハッピーチケット、前兆/内部状態の営業日跨ぎ契約を直接明記した本機固有資料は、検索語・資料系統を変更しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一部資料の「チケットは引き継ぐ」は通常遊技中の保持を意味する可能性があり、据え置き朝一契約とは断定しない。

### powerCycleBehavior

- 設定変更なしの純粋な電源OFF→ONについて、AT間天井G数・ハッピーチケット・内部状態・表示/リール初動を明示した本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きと純電断を自動で同義扱いしない。

### gameCounterReset

- 設定変更時: **天井ゲーム数は再抽選される**との解析記録あり。
- 再抽選後の具体値/分布: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 通常時天井: 第一799G（50%でAT）、第二1499G（AT+初期G優遇）。
- 設定変更後は天井ゲーム数再抽選との記録があるが、**固定のリセット専用短縮天井数値は確認できず** `UNVERIFIED_AFTER_RESEARCH`。
- 「リセット後必ず○○G」のような公開朝一数値は今回固定できない。

### modeAfterReset

- 規定Gモードや設定変更時専用モードの公開振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井G再抽選を確認しているが、それを内部モード再抽選と同義にはしない。

### stateAfterReset

- 設定変更時の高確/低確、前兆、チケット関連内部状態の再抽選/初期化契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時に天井Gが再抽選されること自体は確認。
- それが通常より有利な短縮保証になるか、朝一AT当選率が優遇されるかは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 据え置きの天井進捗を設定変更で失う可能性はあるが、再抽選値が不明のため一律の不利として数値化しない。
- ハッピーチケット消去などの本機固有ペナルティは `UNVERIFIED_AFTER_RESEARCH`。

### resetDetection

- 「サマージャンボ / サマーあの夏のチケットの行方ジャンボAA / JPS」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井再抽選 / ガックン / 初期出目 / チケット」を変更して再探索。
- 本機固有のガックン、初期出目、表示、ランプ等による確定的/濃厚な変更判別契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時天井G: **再抽選**（具体振り分け不明）。
- リセット専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一特定G以内当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

- `CONFLICT_BASE_GAMES_PER_50_52_VS_48`:
  - PiDEA機械説明会: 千円当たり52G。
  - スロット日報: 約52G/50枚。
  - ちょんぼりすた: 約48G/50枚。
  - 平均化せず別定義/別資料値として保持。
- `CONFLICT_MINOR_PAYOUT_SETTING6_108_48_VS_108_4_108_5`:
  - パチマガスロマガ精密値108.48%。
  - スロット日報108.4%。
  - ちょんぼりすた/pacnk108.5%。
  - 丸め差候補だが元資料定義を尊重し精密値をcanonical。
- `CONFLICT_NET_INCREASE_2_6_VS_2_5`:
  - PiDEA/P-WORLD/パチマガスロマガ: 約2.6枚/G。
  - ちょんぼりすた: 約2.5枚/G。
  - 業界一次/DB複数一致の2.6をcanonical。
- `RELEASE_DATE_DEFINITION_2015_07_26_DELIVERY_VS_2015_07_27_HALL_START`:
  - PiDEA: 7月26日納品予定。
  - K-Navi/ALL7: 7月27日全国導入開始/導入予定。
  - 定義差として分離し、canonicalは07-27。

## missingFields

- 特殊設定0のAT初当たり・機械割詳細: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の天井再抽選具体値/振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の天井G/チケット/内部状態の営業日跨ぎ契約: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の本機固有挙動: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有の変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. K-Navi「2015年7月 新台導入カレンダー」 — https://p-kn.com/calendar/201507/
   - 2015-07-27のパチスロとしてJPS「サマージャンボ ～あの夏のチケットの行方～」を掲載。全国一斉導入開始日表記。
   - confidence: INDUSTRY_DATABASE_HIGH
2. ALL7「2015年7月 新台導入予定一覧」 — https://www.all7.jp/plans/index/2015/07
   - JPS「サマージャンボ」2015-07-27導入予定。
   - confidence: INDUSTRY_DATABASE_HIGH
3. PiDEA X「JPS『サマージャンボ』ドリームに続く機種発表」2015-06-05 — https://www.pidea.jp/articles/JPS%E3%80%8C%E3%82%B5%E3%83%9E%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%9C%E3%80%8D%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%81%AB%E7%B6%9A%E3%81%8F%E6%A9%9F%E7%A8%AE%E7%99%BA%E8%A1%A8
   - 型式名、純増約2.6枚/G、千円当たり52G、ジャンBONUS33G、チケット3/4/5枚時33/66/100%、納品予定7月26日。
   - confidence: INDUSTRY_PRIMARY_HIGH
4. パチマガスロマガ「サマージャンボ～あの夏のチケットの行方～」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/32/a.php
   - AT純増+2.6枚/G、33G以上など。
   - confidence: ANALYSIS_HIGH
5. パチマガスロマガ「ボーナス確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/32/h.php
   - AT初当たり1/307.1～1/195.2、PAYOUT95.74～108.48%。設定1/2/4/5/6。
   - confidence: ANALYSIS_HIGH
6. P-WORLD「サマージャンボ」 — https://www.p-world.co.jp/machine/database/7756
   - 5号機AT、純増2.6枚/G、カウントダウンサマー7G、ジャンBONUS33G、BIGジャンBONUS111G以上、チケット3/4/5枚時33/66/100%。
   - confidence: INDUSTRY_DATABASE_HIGH
7. ちょんぼりすた「サマージャンボ スロット」 — https://chonborista.com/slot/jps-slot/10479/
   - 導入日2015-07-27、AT初当たり/機械割丸め値、約48G/50枚、天井799G/1499G、設定0存在。
   - confidence: ANALYSIS_HIGH
8. すろぱちくえすと「サマージャンボ 天井恩恵」 — https://www.slopachi-quest.com/article/%E3%82%B5%E3%83%9E%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%9C-%E5%A4%A9%E4%BA%95/
   - 第一799G=50%でAT、第二1499G=AT+初期G優遇、設定0存在、設定1機械割95.74%。
   - confidence: ANALYSIS_HIGH
9. pacnk「サマージャンボ 設定判別ツール」 — https://pacnk.com/slot/tools/sh_summerjumbo.html
   - 設定1/2/4/5/6のAT初当たり・PAYOUT丸め値、設定変更後は天井ゲーム数再抽選との整理。
   - confidence: ANALYSIS_SINGLE_FOR_RESET_CONTRACT
10. 福岡県遊協掲載PDF「高射幸性遊技機の取り扱いについての合意書」 — https://www.fukuoka-yukyo.jp/60011948/wp-content/uploads/2019/11/201710121615441139.pdf
   - ジェイピーエス「サマーあの夏のチケットの行方ジャンボAA」、東京都検定年月日2015-06-15。
   - confidence: INDUSTRY_DOCUMENT_HIGH
