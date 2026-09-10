# No.1195 ゆるせぽね

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: ゆるせぽね
- alternateName: アナターのワイフゆるせぽね
- manufacturer: ミズホ
- releaseDateCanonical: 2018-05-28
- generation: 5.9号機 / 5号機
- systemType: ボーナス+RT / A+RT / 貫通型NSRT
- formalModelName: `ゆるせぽねDY`
- certificationNumber: `7S1516`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、K-Navi、ちょんぼりすた、一撃、2-9伝説は2018-05-28で一致。
- ユニバーサル公式は発売を2018年5月としている。
- アタリ7のみ2018-06-04表記が確認されるため、平均せず`CONFLICT_RELEASE_DATE_2018_05_28_VS_2018_06_04`として保持する。
- 複数の当時/導入後資料が一致する2018-05-28をcanonicalとする。

## performanceCore

### payoutRateBySetting
- setting1: 97.8%
- setting2: 99.8%
- setting5: 105.1%
- setting6: 113.0%

### initialHitBySetting
GOD:
- setting1: 1/1638.4
- setting2: 1/1638.4
- setting5: 1/1638.4
- setting6: 1/1638.4

BIG:
- setting1: 1/212.1
- setting2: 1/202.3
- setting5: 1/175.2
- setting6: 1/144.0

MB:
- setting1: 1/213.5
- setting2: 1/203.5
- setting5: 1/176.2
- setting6: 1/144.7

ボーナス合算:
- setting1: 1/99.9
- setting2: 1/95.5
- setting5: 1/83.4
- setting6: 1/69.1

### baseGamesPer50
- setting1: 30.4G/50枚
- setting2: 30.9G/50枚
- setting5: 31.6G/50枚
- setting6: 32.9G/50枚
- 公開FAQの概算: 平均約31G/50枚。

### netIncrease
- RT「GOD GAME」: 現状維持程度。

### basicPayout
- GOD: 最大203枚。
- BIG: 最大155枚。
- MB: 最大47枚。

### ceiling
- 天井/救済機能: 非搭載。

## modeSpecificMinimumData
- GOD終了後は700Gの貫通型NSRT「GOD GAME」へ突入。
- GOD GAMEはBIG/MB成立でも終了せず、ボーナス終了後に残りRTへ復帰する。
- RT中にGOD成立時は終了後に700Gへ再セット。
- GOD GAMEの期待獲得枚数は設定1でも1000枚超とされる。
- 実機完全再現用の全小役・全同時当選テーブルは物差し範囲外。

## resetBehavior

### settingChangeBehavior
- 公開FAQは設定変更時の挙動を「すべてクリア」と明示。
- ただしRT状態について、一撃の当時解析は設定変更時を「現在調査中」としており、700G RTの残G/RT種別を設定変更でどう処理するかは直接固定できない。一般論から補完せず`RT_SPECIFIC_UNVERIFIED_AFTER_RESEARCH`。
- 天井は非搭載。

### carryOverBehavior
- 「据え置き」を純電断と独立条件で扱った本機固有のRT残G・内部状態契約は、機種名/型式名/メーカー名と「据え置き・朝一・リセット・RT引継ぎ」を変えて再探索したが固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 天井ゲーム数の引継ぎは`NOT_APPLICABLE_NO_CEILING`。

### powerCycleBehavior
- 公開FAQは電源OFF時について、ボーナス当選〜告知前なら電源復帰後にWINランプが点灯すると明示。
- 同FAQは「BB後30G以内のカウント」を電源OFF→ONでクリアすると明示。
- 一撃の当時解析は純電源OFF→ON時のRT状態を「現在調査中」としている。RT残G/RT状態の保持・消去は十分な再探索後も`UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井: `NOT_APPLICABLE_NO_CEILING`。
- BB後30G以内の内部カウント: 純電源OFF→ONでクリア（公開FAQ）。
- 設定変更時はFAQの「すべてクリア」に含まれる扱いだが、このカウント単独の別記数値は公開資料で確認できない。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING_OR_RESCUE_FUNCTION`。

### modeAfterReset
- 通常時のAT/ART/CZモード制ではない。
- 設定変更時は公開FAQで「すべてクリア」。朝一専用モード/モード振り分けは`NONE_CONFIRMED_AFTER_RESEARCH`。
- RT残Gの設定変更/電断処理は別途`UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時: 公開FAQ「すべてクリア」。
- 据え置き独立条件: `UNVERIFIED_AFTER_RESEARCH`。
- 純電断: 未告知ボーナスは復帰後WINランプ点灯、BB後30G以内カウントはクリア。RT状態は`UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5_9_A_PLUS_RT_NO_ADVANTAGEOUS_SECTION_DEPENDENT_AT_GAMEPLAY`。

### resetBenefits
- 天井/救済機能なし。
- ちょんぼりすたは設定変更時「恩恵などは無し」と明示。
- リセット専用短縮天井、朝一専用モード、公開初当たり優遇率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の公開朝一不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし純電断でBB後30G以内カウントがクリアされることは仕様上の変化として別記し、出玉上の「不利」とは断定しない。

### resetDetection
- 設定変更/据え置きを判別する本機固有のガックン・初期出目・ランプ確定条件/発生率は、十分な再探索後も固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 純電断時、電断前にボーナス成立〜未告知だった場合は復帰後WINランプ点灯が公開FAQで確認できる。ただしこれは設定変更判別の一般的な確定要素ではない。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- powerCycleBbPost30gCounter: `CLEARED`
- gakkunChangeDetectionRate: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更専用の当選率/モード振り分け/短縮天井/恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常性能としてGODは全設定1/1638.4だが、朝一専用確率ではない。

## conflicts
- `CONFLICT_RELEASE_DATE_2018_05_28_VS_2018_06_04`
  - HAZUSE / K-Navi / ちょんぼりすた / 一撃 / 2-9伝説: 2018-05-28。
  - アタリ7: 2018-06-04。
  - ユニバーサル公式: 2018年5月。
  - canonicalは複数資料一致の2018-05-28。
- `RESET_GENERAL_ALL_CLEAR_VS_RT_SPECIFIC_RESEARCH_PENDING`
  - 公開FAQ: 設定変更時「すべてクリア」。
  - 一撃: 設定変更時および電源OFF→ON時のRT状態は「現在調査中」。
  - broadな状態クリア記述からRT残G契約を推定せず、RT固有項目はUNVERIFIEDで保持。

## missingFields
- 設定変更/据え置き/純電源OFF→ON時の700G RT残G/RT状態の直接契約。
- 据え置き独立条件での本機固有状態契約。
- 本機固有ガックン/初期出目等の設定変更判別条件・発生率。
- 2018-06-04表記が5/28多数資料とずれる理由の一次説明。

## sources
取得日: 2026-09-10

1. ユニバーサルエンターテインメント公式 — ゆるせぽね
   - https://www.universal-777.com/product/slot/yurusephone/
   - ミズホ、ボーナス+RT、5号機、発売2018年5月、GOD 1/1638、GOD後NSRT700G。
   - confidence: `OFFICIAL`
2. HAZUSE — ゆるせぽね
   - https://hazuse.com/machine/pachislot/7S1516/
   - 型式`ゆるせぽねDY`、検定番号`7S1516`、導入2018-05-28、メーカー ミズホ、天井非搭載。
   - confidence: `INDUSTRY_DB_HIGH`
3. P-WORLD — ゆるせぽね
   - https://www.p-world.co.jp/machine/database/8655
   - 設定別GOD/BIG/MB/合算/機械割、最大獲得枚数、700G貫通型RT。
   - confidence: `INDUSTRY_DB_HIGH`
4. K-Navi — ゆるせぽね
   - https://p-kn.com/slot/3004/
   - ホール導入開始2018-05-28、GOD/BIG/MB最大獲得枚数、GOD 1/1638。
   - confidence: `ANALYSIS_HIGH`
5. ちょんぼりすた — ゆるせぽね
   - https://chonborista.com/slot/universal-slot/57961/
   - 導入2018-05-28、設定別ボーナス/機械割、30.4〜32.9G/50枚、天井なし、設定変更時の全状態クリア、朝一恩恵なし、電断時BB後30G以内カウントクリア。
   - confidence: `ANALYSIS_HIGH`
6. 一撃 — ゆるせぽね
   - https://1geki.jp/slot/s_yurusephone/
   - 設定別合算/機械割、導入予定2018-05-28、700G RT、期待獲得1000枚超。
   - confidence: `ANALYSIS_HIGH`
7. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_yurusephone/3/
   - 天井非搭載。設定変更/電源OFF→ON時のRT状態を「現在調査中」と明示。
   - confidence: `ANALYSIS_PRIMARY_PERIOD`
8. 公開FAQ PDF — ゆるせぽね FAQ
   - https://rashinban-web.com/system/files/member/column/suzumenosu/yurusepone.pdf
   - 設定変更時「すべてクリア」、電源OFF時の未告知ボーナスWINランプ点灯、BB後30G以内カウントクリア、救済機能なし、平均31G/50枚、GOD後700G NSRT。
   - confidence: `INDUSTRY_FAQ_HIGH`
9. 2-9伝説 — 新台導入一覧
   - https://29den.com/newslot/
   - 2018-05-28群にゆるせぽねのみを掲載。
   - confidence: `SECONDARY_CALENDAR`
10. アタリ7 — ゆるせぽね
   - https://www.atari7.com/slot/date1227864469.php
   - 導入日2018-06-04表記。主要スペックは他資料と概ね一致するが、同一ページ内で機械割に別表の不整合もあるため導入日競合資料として限定利用。
   - confidence: `SECONDARY_CONFLICT`

## researchNotes
- 性能コアは公式、P-WORLD、ちょんぼりすた、一撃等で照合。設定構成は1/2/5/6の4段階。
- リセットはFAQの広い「すべてクリア」を、当時解析で明示的に未確定なRT残Gまで拡張しない。RT-specificはUNVERIFIEDを維持。
- 純電断には本機固有の公開挙動があり、未告知ボーナスのWINランプ点灯とBB後30G以内カウントクリアを保存した。
- ガックン等は一般的なユニバーサル機の挙動から補完していない。

## quality
- performanceCoreConfidence: `ANALYSIS_HIGH_WITH_OFFICIAL_CROSSCHECK`
- resetBehaviorConfidence: `INDUSTRY_FAQ_HIGH_PARTIAL_RT_UNVERIFIED`
- releaseDateConfidence: `ANALYSIS_HIGH_WITH_SECONDARY_CONFLICT`
