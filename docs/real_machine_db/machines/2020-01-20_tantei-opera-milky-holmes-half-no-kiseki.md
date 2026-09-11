# 探偵オペラ ミルキィホームズ 1/2の奇跡

recordNo: 1330
machineName: 探偵オペラ ミルキィホームズ 1/2の奇跡
machineNameVariants: 探偵オペラ ミルキィホームズ １／２の奇跡 / ミルキィホームズ 1/2の奇跡 / SミルキィホームズND
manufacturer: カルミナ（製造: ネット株式会社）
formalModel: SミルキィホームズND
certificationNumber: 9S1338
releaseDate: 2020-01-20
generation: 6号機
systemType: AT / 疑似ボーナス連チャン / 技術介入 / AAA400

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.9% |
| 2 | 99.6% |
| 3 | 100.9% |
| 4 | 104.2% |
| 5 | 107.9% |
| 6 | 110.1% |

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ボーナス初当り | BIG | REG | BONUS合算 |
|---|---:|---:|---:|---:|
| 1 | 1/347 | 1/174 | 1/465 | 1/127 |
| 2 | 1/333 | 1/166 | 1/445 | 1/121 |
| 3 | 1/321 | 1/160 | 1/427 | 1/116 |
| 4 | 1/307 | 1/153 | 1/407 | 1/111 |
| 5 | 1/293 | 1/145 | 1/388 | 1/106 |
| 6 | 1/277 | 1/137 | 1/365 | 1/100 |

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約42.3G/50枚。解析によって設定差込み約42.3〜44.1G/50枚表記あり。定義を分けて保持し平均化しない。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- AT純増: 約2.8枚/G。

## basicPayout
- BIG BONUS: 100枚+α。
- REG BONUS: 50枚+α。
- EXTRA BONUS「びよんどTHEミルキィウェイ」: 200枚+α。
- EXTRA BONUS「みるきぃあたっく」: 400〜1000枚+α。
- ボーナス終了後は10G+αのアンコールゾーン。ボーナスループ率約70%。

信頼度: P_WORLD + ANALYSIS_HIGH

## modeSpecificMinimumData
- 有利区間開始から999G消化でLIVE BONUS当選のゲーム数天井。
- BONUS5連達成時はEXTRA BONUSへ移行し、1/2で「びよんどTHEミルキィウェイ」または「みるきぃあたっく」。
- 通常時はミルキィぽいんと、ミッション高確率、ミルキィミッションを経由して疑似ボーナスを目指す。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 天井ゲーム数: **RESET**。
- 内部状態: **RESET**。
- 有利区間: **RESET**。
- 有利区間ランプ: **消灯**。
- 設定変更直後は内部的にアンコールゾーン相当の可能性を指摘する当時解析があるが、朝一高当選率の確定公開値は確認できず、確定恩恵にはしない。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置きでは天井進行・内部状態・有利区間を引き継ぐ。
- 通常時点灯タイプの有利区間ランプが朝一点灯なら据え置き濃厚。

### powerCycleBehavior
- 電源OFF→ONのみ: **天井引継ぎ / 内部状態引継ぎ / 有利区間引継ぎ**。
- 有利区間ランプは基本的に点灯状態を引き継ぐ。

### gameCounterReset
- 設定変更: 内部999G天井の進行をRESET。
- 据え置き / 電源OFF→ONのみ: CARRY_OVER。

### ceilingAfterReset
- 設定変更専用の短縮天井は確認できず。設定変更後も有利区間移行後999G天井を基準とする。

### modeAfterReset
- 本機の設定変更時「全モード振り分け」に相当する公開契約は、表記揺れ・型式名・メーカー名とリセット/朝一/モードを組み替え再探索したが固定できず、推測補完しない。

信頼度: UNVERIFIED_AFTER_RESEARCH_FOR_RESET_MODE_TABLE

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き / 電源OFF→ONのみ: 内部状態引継ぎ。

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き / 電源OFF→ONのみ: 有利区間CARRY_OVER。
- 通常時は有利区間ランプ点灯タイプ。

### resetBenefits
- 設定変更後は有利区間が新規開始。
- 当時攻略では「内部的にアンコールゾーンの可能性」が言及される一方、実戦上の当選率は高くないとされるため、確定仕様/確定率には格上げしない。

### resetPenalties
- 設定変更専用の主要な不利抽選は公開確認できず。
- 前日の天井進行・内部状態を失うことはRESET契約として保存。

### resetDetection
- **朝一有利区間ランプ消灯＝設定変更濃厚、点灯＝据え置き濃厚**。
- 有利区間ランプはMAXBET付近のクレジット右下。
- 本機固有のガックン発生条件/率は十分再探索後も公開確定値を固定できず推測補完しない。

### numericResetData / publicMorningNumbers
- 設定変更専用の短縮天井: NONE_CONFIRMED。
- 設定変更専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 朝一特定G以内当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## resetBehavior 再探索メモ
2026-09-11に `探偵オペラ ミルキィホームズ 1/2の奇跡 / ミルキィホームズ 1/2の奇跡 / SミルキィホームズND / カルミナ / ネット` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 内部状態 / 有利区間 / ランプ / ガックン / 変更判別` を組み合わせ、カルミナ公式、遊技通信検定通過、K-Navi、P-WORLD、ちょんぼりすた、当時攻略記事、後年設定DBを横断。設定変更/純電断の天井・内部状態・有利区間契約とランプ判別は複数系統で固定。専用モード振り分け・朝一早当り率・ガックン率は公開確定値を固定できず推測補完しない。

## sources
取得日: 2026-09-11

1. カルミナ公式
   - https://carmina-gaming.co.jp/product/milkyholmes/
   - 2020.01、カルミナ第1弾、AAA400、型式SミルキィホームズND、製造ネット株式会社。
   - reliability: OFFICIAL
2. 遊技通信web — 東京都公安委員会検定通過状況（2019-12-09）
   - https://www.yugitsushin.jp/open/maker/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%8812%E6%9C%889%E6%97%A5%EF%BC%89/
   - SミルキィホームズND / ネット / 9S1338。
   - reliability: INDUSTRY
3. K-Navi
   - https://p-kn.com/slot/3364/
   - 2020-01-20導入、基本疑似ボーナス獲得性能を確認。
   - reliability: ANALYSIS_HIGH
4. P-WORLD
   - https://www.p-world.co.jp/machine/database/9107
   - 製造/メーカー、6号機AT、ボーナス獲得性能、999G天井、設定別初当り/BIG/REG/合算を確認。
   - reliability: ANALYSIS_HIGH
5. ちょんぼりすた
   - https://chonborista.com/slot/carmina/103519/
   - 設定別性能、999G天井、朝一設定変更/電源OFF→ON、ランプ判別を確認。
   - reliability: ANALYSIS_HIGH
6. おスロおパチおいでやす — 朝一リセット
   - https://oslo-opachi.com/2020/01/16/milkyholmes_tennjyou/
   - 天井RESET/CARRY_OVER、内部状態RESET/CARRY_OVER、ランプ消灯/点灯を照合。
   - reliability: ANALYSIS_SINGLE_SUPPORT
7. ニコナナ 機種Check
   - https://www.youtube.com/watch?v=XsKB0NefYs8
   - 42.3G/50枚、純増2.8枚/G、設定別性能、2020-01-20導入を照合。
   - reliability: INDUSTRY_MEDIA_SUPPORT

## missingFields
- 設定変更専用モード振り分け公開値。
- 朝一特定G以内当選率の確定公開値。
- 本機固有ガックン発生条件/率。

## conflicts
- baseGamesPer50: 約42.3G固定表記と設定差込み約42.3〜44.1G/50枚表記がある。定義差として双方保持し平均化しない。

## status
coreStatus: COMPLETE_CORE
resetBehaviorStatus: COMPLETE_PUBLIC_RESET_CORE
confidence: OFFICIAL_MODEL + INDUSTRY_CERT + ANALYSIS_HIGH_MULTI_SOURCE
