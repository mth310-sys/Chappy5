# バーニングエクスプレス

recordNo: 1764
machineName: バーニングエクスプレス
aliases: スマスロ バーニングエクスプレス / LバーニングエクスプレスZN
manufacturer: ゼクロスクリエイティブ（北電子販売）
formalModel: LバーニングエクスプレスZN
inspectionCode: 5S0259
releaseDate: 2025-12-01
generation: 6.5号機 / スマスロ
systemType: AT / 完全告知 / 擬似ボーナス / ラウンド継続
settings: 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 北電子公式製品ページで「バーニングエクスプレス」を確認。
- 遊技日本は北電子発表として、製造元ゼクロスクリエイティブ、型式 `LバーニングエクスプレスZN`、2025-12-01導入を掲載。
- HAZUSEは型式 `LバーニングエクスプレスZN`、検定番号 `5S0259`、2025-12-01導入、メーカー北電子を掲載。
confidence: OFFICIAL / INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.5%
- setting2: 99.9%
- setting4: 103.7%
- setting5: 107.7%
- setting6: 110.2%
initialHitBySetting:
  burningBonus:
  - setting1: 1/385.3
  - setting2: 1/380.1
  - setting4: 1/362.2
  - setting5: 1/350.3
  - setting6: 1/342.7
  expressBonus:
  - setting1: 1/409.8
  - setting2: 1/403.9
  - setting4: 1/382.2
  - setting5: 1/367.8
  - setting6: 1/359.2
  bonusCombined:
  - setting1: 1/198.6
  - setting2: 1/195.8
  - setting4: 1/186.0
  - setting5: 1/179.4
  - setting6: 1/175.4
baseGamesPer50: 約31G/50枚
netIncrease: 約5.0枚/G
basicPayout:
- BURNING BONUS: 平均約500枚
- EXPRESS BONUS: 約50枚
- BURNING EXPRESS BONUS: 1セット55G / 継続率約83% / 期待獲得約3291.7枚（媒体では3000枚超表記もあり）
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は全役でボーナス直撃抽選を行う完全告知AT機。
- メーカー/業界説明では状態移行・潜伏・前兆・CZといった複雑な通常時要素を極力排除。
- 1gekiは通常時について「ゾーン及びモードなどの概念が存在しない（ターミナルゾーンを除く）」と明記。
- 通常時はデフォルト / カラー / 先アツの3演出モードを任意選択できるが、これは内部モードではなく演出選択。
- BURNING BONUSはラウンド継続型。8R到達後などはTERMINAL ZONE（30G+α、成功率約50%）へ移行し、同ゾーン中ボーナスでBURNING EXPRESS BONUSが濃厚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_POWER_CYCLE_AND_CEILING_DISTRIBUTION
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井ゲーム数をリセットし、通常最大999G+αから最大666G+αへ短縮。
- ちょんぼりすたの設定変更/電源OFF→ON比較では設定変更時に「天井RESET」「内部状態RESET」。
- 有利区間移行時も設定変更時と同一の短縮天井振り分けが適用される。
- 設定変更時の有利区間そのものは二次解析の朝一比較表でRESETとされるが、高優先のメーカー/業界一次資料に独立した直接文言を固定できなかったため `ANALYSIS_SUPPORTED` として扱う。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_CEILING / ANALYSIS_SUPPORTED_FOR_ADVANTAGEOUS_SECTION

### carryOverBehavior
- 据え置き専用のメーカー直表は今回固定できなかった。
- 電源OFF→ON時の比較表では天井・内部状態を引き継ぐため、ホールで設定を変更せず純電断復帰したケースの内部進行は継続。
- 設定変更されていないことを前提とする据え置き契約について、二次解析では有利区間・天井・内部モード/状態の引継ぎと整理されている。
- 据え置き時の独立した高優先直接表が不足するため、`CARRY_OVER_ANALYSIS_SUPPORTED` とし、純電断の直接比較事実と混同しない。
confidence: ANALYSIS_SUPPORTED / DIRECT_POWER_CYCLE_CORROBORATION

### powerCycleBehavior
- ちょんぼりすたの朝一比較表で、電源OFF→ON時は天井を引き継ぎ、内部状態も引き継ぐ。
- 純電断時の有利区間については二次解析で引継ぎ表記を確認したが、高優先資料の独立直接文言は今回固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 純電断時の開始ステージは同資料で調査中。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION_DIRECT_WORDING

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER_ANALYSIS_SUPPORTED
powerCycle: CARRY_OVER
notes:
- 通常天井は最大999G+α。
- 設定変更時/有利区間移行時は最大666G+α。
- 天井ゲーム数はボーナス当選時にも再決定される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 999G+α
resetCeiling: 666G+α
ceilingBenefit: BURNING BONUS または EXPRESS BONUS当選
reduction: 333G
resetCeilingDistribution:
- 111G+α: 10.9%
- 222G+α: 10.9%
- 333G+α: 10.9%
- 444G+α: 10.9%
- 555G+α: 10.9%
- 666G+α: 45.5%
normalCeilingDistribution:
- 111G+α: 0.4%
- 222G+α: 0.4%
- 333G+α: 0.4%
- 444G+α: 0%
- 555G+α: 0.4%
- 666G+α: 0%
- 999G+α: 98.4%
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常時の内部モード概念は、1gekiで「存在しない（ターミナルゾーンを除く）」と明記。
- 設定変更専用の内部モード再抽選率は `N/A_NO_NORMAL_INTERNAL_MODE_CONFIRMED`。
- デフォルト/カラー/先アツはユーザー選択の演出モードであり、resetBehaviorの内部モードとは別物。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時: 内部状態RESET。
- 電源OFF→ON時: 内部状態CARRY_OVER。
- 通常時の状態移行や潜伏を排除した設計説明があるため、公開されている具体的な通常/高確の設定変更時振り分け率は `NONE_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / NONE_FOUND_FOR_NUMERIC_STATE_DISTRIBUTION

### advantageousSectionReset
- 設定変更時: RESET（朝一二次解析比較表で確認）。
- 設定変更されない据え置き/純電断: CARRY_OVERと二次解析では整理。
- 設定変更/有利区間移行時には同一の短縮天井抽選（111〜555G各10.9%、666G 45.5%）。
- 有利区間移行の機種固有契機を実機完全再現レベルまで追うことは本DB範囲外。今回、高優先資料で設定変更/純電断の有利区間そのものを直接対比した表は固定できず、直接性の信頼度は一段下げる。
confidence: ANALYSIS_SUPPORTED / MULTI_SOURCE_MATCH_FOR_POST_TRANSITION_CEILING_BENEFIT

### resetBenefits
- 最大天井が999G+α → 666G+αへ333G短縮。
- 111 / 222 / 333 / 444 / 555G+αが各10.9%、666G+αが45.5%。最大天井以外の111〜555G合計は54.5%。
- 通常時は999G+αが98.4%のため、設定変更朝一では浅い規定ゲーム数選択率が大幅に上昇。
- 有利区間移行時にも同じ短縮天井振り分けが適用される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により前日の天井ゲーム数・内部状態の持越し価値は消える。
- 設定変更固有の冷遇、初当り不利率、朝一ペナルティなどは検索語・資料系統を変えて再探索しても `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LOSS_OF_CARRY_OVER / NONE_CONFIRMED_FOR_OTHER_PENALTY

### resetDetection
- 設定変更時は最大666G+αのため、朝一666G+αを明確に超えてボーナス非当選なら据え置き濃厚材料と二次解析で整理される。
- 本機は通常でも111/222/333/555Gに各0.4%の振り分けがあるため、浅いゾロ目当選だけで設定変更を確定できない。
- `バーニングエクスプレス / LバーニングエクスプレスZN / 北電子 / ゼクロスクリエイティブ + ガックン / リールガックン / 設定変更 / 朝一 / 据え置き / 電源OFF ON` で再探索したが、本機固有ガックン条件・発生率を高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_666G_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 999G+α
resetCeiling: 666G+α
resetCeilingReduction: 333G
resetCeilingDistribution:
- 111G+α: 10.9%
- 222G+α: 10.9%
- 333G+α: 10.9%
- 444G+α: 10.9%
- 555G+α: 10.9%
- 666G+α: 45.5%
shallowResetCeilingTotal111To555: 54.5%
normal999CeilingRate: 98.4%
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues:
- 999G+α → 666G+α
- 111G+α 10.9%
- 222G+α 10.9%
- 333G+α 10.9%
- 444G+α 10.9%
- 555G+α 10.9%
- 666G+α 45.5%
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## conflicts
- 主要な設定別ボーナス確率・合算・機械割・ベース・純増に重大CONFLICTなし。
- メーカー表記は解析媒体で「北電子」、業界記事では「製造元ゼクロスクリエイティブ / 北電子発表」。本DBでは実製造と販売系統を分離するため `manufacturer: ゼクロスクリエイティブ（北電子販売）` と正規化。
- BURNING EXPRESS BONUSの期待獲得は業界/初期資料で「3000枚超」、後発解析で3291.7枚。方向性矛盾ではなく精密化と判断し、3291.7枚を詳細値として保持。

## sources
retrievedAt: 2026-09-15
- 北電子公式製品ページ: https://www.kitadenshi.co.jp/slot/burning-express/
- 遊技日本（2025-09-17）: https://yugi-nippon.com/pachinko-new-machine/post-73237/
- HAZUSE: https://hazuse.com/hd/5s0259/
- パチビー機種情報: https://www.pachibee.jp/machines/about/225100001
- パチビー攻略（天井振り分け）: https://www.pachibee.jp/machines/kouryaku/225100001
- 必勝本 天井ゲーム数抽選: https://p.hisshobon.jp/machine/4619/1/112748
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/88197/
- 1geki 天井/朝一: https://1geki.jp/slot/l_burning_express/3/
- なな徹 朝一/リセット: https://nana-press.com/kaiseki/machine/1057/33312/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/245581/
- 6確: https://www.kaku6.jp/slot/express/
- パチスロ新台導入日カレンダー2025（境界監査補助）: https://pachinkopachisro.com/archives/58760696.html
