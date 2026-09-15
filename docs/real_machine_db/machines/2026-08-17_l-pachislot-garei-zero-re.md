# No.1817 Lパチスロ 喰霊-零-Re

status: COMPLETE_CORE_WITH_RESET_RESEARCH
retrievedAt: 2026-09-15

machineName: Lパチスロ 喰霊-零-Re
manufacturer: オーイズミラボ（販売/ブランド: オーイズミ）
formalModel: Lパチスロ喰霊零Re/L3
releaseDate: 2026-08-17
generation: 6.5号機 / スマスロ
systemType: A+ART（リアルボーナス＋ART）
payoutRateBySetting: 設定1 97.8% / 2 98.9% / 3 100.3% / 4 104.4% / 5 106.9% / 6 110.0%（ジャグラーズネット系。6確は設定3を101.0%表記のためCONFLICT）
initialHitBySetting:
- ボーナス合算: 1/199.8 / 1/198.6 / 1/195.0 / 1/189.4 / 1/186.2 / 1/182.0
- ART: 1/468.6 / 1/451.2 / 1/408.8 / 1/351.5 / 1/314.2 / 1/279.8
- CZ 超自然災害Mode: 1/287.2 / 1/277.6 / 1/255.6 / 1/230.3 / 1/212.6 / 1/197.8
baseGamesPer50: 約36.1G/50枚（設定1）
netIncrease: ART約1.0枚/G、ボーナス込み約1.4枚/G
basicPayout:
- BIG: 約180枚
- REG: 約40枚
- ART 喰霊CHANCE: 1セット50G、継続率50〜93%

## resetBehavior v0.7
resetQaStatus: COMPLETE_WITH_PARTIAL_UNVERIFIED_FIELDS
settingChangeBehavior:
- 設定変更で有利区間・天井G数・内部状態をリセットとする機種固有二次解析を確認。
- 天井短縮は確認されず、ボーナス・ART間999G+αのまま。
- 設定変更時/有利区間開始時は内部状態を再抽選し、高確/超高確スタート率に設定差がある。
carryOverBehavior:
- 据え置きは前日の天井G数を引き継ぐとする機種固有二次解析を確認。SECONDARY_SUPPORTED。
- 内部状態/有利区間の据え置き直接比較は高優先資料で未固定。
powerCycleBehavior:
- 設定変更なしの電源OFF→ONについて、天井G/内部状態/有利区間の本機固有三者直接比較を十分な再探索後も固定できず。UNVERIFIED_AFTER_RESEARCH。
gameCounterReset:
- 設定変更: RESET（天井カウント0Gから）。
- 据え置き: CARRY_OVER（SECONDARY_SUPPORTED）。
- 純電断: UNVERIFIED_AFTER_RESEARCH。
ceilingAfterReset:
- 通常/設定変更後ともボーナス・ART間999G+α。到達で無限ART「喰霊CHANCE・夢幻」。
- 天井到達前にボーナスまたはART当選で天井カウントはリセット。
- 設定変更固有の天井短縮は確認されない。
modeAfterReset:
- 天井短縮用の朝一専用モードは確認されず。
- 設定変更時/有利区間開始時の状態再抽選はstateAfterResetへ分離。
stateAfterReset:
- 設定変更時/有利区間開始時の高確・超高確振り分け（設定1→6）を公開解析で確認。
- 高確: 25.0 / 26.6 / 28.1 / 29.7 / 31.3 / 32.8%
- 超高確: 0.4 / 0.4 / 0.8 / 0.8 / 1.2 / 1.6%
- 高確以上合算: 25.4 / 27.0 / 28.9 / 30.5 / 32.4 / 34.4%
advantageousSectionReset:
- 設定変更でRESETとする二次解析を確認。
- 有利区間開始時は上記状態再抽選を行う。
- 純電断時の有利区間直接契約はUNVERIFIED_AFTER_RESEARCH。
resetBenefits:
- 設定変更時/有利区間開始時に高確以上から始まる抽選があり、設定1でも25.4%、設定6で34.4%。
- 天井短縮などのリセット固有恩恵は確認されない。
resetPenalties:
- 据え置きなら前日天井G数を引き継げるのに対し、設定変更では0Gへ戻るため、前日深いハマリ台では客側の天井期待値を消す方向に働く。
resetDetection:
- 前日ハマリを引き継いで999G+α相当で夢幻ARTへ到達する挙動は据え置き推測材料になり得る。
- 本機固有ガックン条件/発生率、朝一即時ランプ判別は型式/メーカー/シリーズ名＋設定変更/リセット/据え置き/電源OFF ON/ガックン等で再探索したが未固定。UNVERIFIED_AFTER_RESEARCH。
numericResetData:
- 通常天井: ボーナス・ART間999G+α
- 設定変更後天井: 999G+α（短縮確認なし）
- 設定変更時/有利区間開始時 高確以上: 設定1 25.4% / 2 27.0% / 3 28.9% / 4 30.5% / 5 32.4% / 6 34.4%
- 内訳 高確: 25.0 / 26.6 / 28.1 / 29.7 / 31.3 / 32.8%
- 内訳 超高確: 0.4 / 0.4 / 0.8 / 0.8 / 1.2 / 1.6%

## QA notes
- オーイズミ公式発表を報じたグリーンべるとで、オーイズミラボ製・REAL A+第4弾・2026年8月導入を業界一次系で確認。
- G-net販売資料で型式Lパチスロ喰霊零Re/L3、2026-08-17開店、全国3000台、設定1ベース36.1Gを確認。
- ボーナス/ART/機械割はジャグラーズネット、6確、情報島＋、ちょんぼりすた等を横断。
- 設定3機械割はジャグラーズネット100.3%、6確/他一部101.0%で競合。平均せずCONFLICT保持。
- BIG/RB個別確率は媒体間で差が見られるため、本レコードのコアでは合算を優先。個別値はQA対象として無理に固定しない。
- resetBehaviorは2026-09-14公開の必勝本状態移行解析を優先し、設定変更時/有利区間開始時の公開数値を保存。

## sources
- オーイズミ発表 / グリーンべると（製造、REAL A+、A+ART、導入時期）: https://news.p-world.co.jp/articles/33511/greenbelt
- G-net（型式、導入日、販売台数、設定1ベース、販売スペック）: https://g-net-ps.com/info/s0281/
- 情報島＋（導入日、A+ART、純増、ボーナス合算、機械割レンジ、ベース、ART基本性能）: https://p-johojima.jp/machine_spec/post-32625/
- ジャグラーズネット（設定別ボーナス合算/CZ/ART/機械割、ベース、純増、天井）: https://jugglersnet.com/chumoku/garei-zero-re
- 6確（設定別合算/機械割、ベース、純増、基本仕様、天井）: https://www.kaku6.jp/slot/garei0re/
- 必勝本（設定変更時/有利区間開始時の高確・超高確振り分け）: https://hisshobon.com/machineinfo/147685/
- スロベース（設定変更時RESET、据え置き天井G引継ぎ、リセット短縮なし、有利区間/内部状態の二次解析）: https://slobase.jp/articles/garei-zero-re-reset
- イチカツ（999G+α天井、夢幻ART、ボーナス/ARTで天井リセット、BIG180枚/REG40枚）: https://ichikatsu.com/gareizero-re/
- 回胴に散る。（型式Lパチスロ喰霊零Re/L3、導入日、メーカー）: https://kaidou.repop.jp/archives/14264

confidence:
- core: ANALYSIS_HIGH + INDUSTRY
- formalModel: INDUSTRY / ANALYSIS_HIGH
- resetStateNumeric: ANALYSIS_HIGH
- resetCeiling: ANALYSIS_HIGH_TO_SECONDARY_SUPPORTED
- carryOver: SECONDARY_SUPPORTED
- powerCycle: UNVERIFIED
- advantageousSectionPowerCycle: UNVERIFIED
- resetDetectionImmediate: UNVERIFIED

missingFields:
- 純電源OFF→ON時の天井G/内部状態/有利区間の直接契約
- 据え置き時の内部状態/有利区間の高優先直接比較
- 本機固有ガックン条件/発生率

conflicts:
- 設定3機械割: 100.3%（ジャグラーズネット） vs 101.0%（6確等）。平均せず保持。
- BIG/RB個別確率: 複数媒体で差があるため今回canonical個別値を固定せず、ボーナス合算をコア値として採用。
