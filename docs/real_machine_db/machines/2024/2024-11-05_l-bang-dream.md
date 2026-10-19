# Lバンドリ！

recordNo: 1683
machineName: Lバンドリ！
aliases: スマスロ バンドリ！ / スマスロLバンドリ！ / BanG Dream!
manufacturer: オリンピアエステート（オリンピア） / 総販売元 平和
formalModel: LバンドリS11
inspectionCode: 430327
releaseDate: 2024-11-05
generation: 6.5号機 / スマスロ
systemType: AT / 周期抽選 + ST型擬似ボーナスループ
settings: L / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 遊技日本は平和が2024年8月19日に販売発表、製造元オリンピアエステート、型式 `LバンドリS11` と報道。
- HAZUSEは検定番号 `430327`、型式 `LバンドリS11`、オリンピアエステート、導入開始日2024-11-05を掲載。
- ALL7の2024年11月導入一覧でも2024-11-05導入として掲載。
confidence: INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- settingL: 通常性能値は非公開 / 常時下パネル消灯の識別用設定
- setting2: 97.6%（主要解析複数一致。HAZUSEのみ97.5%表記のためCONFLICT保持）
- setting3: 98.9%
- setting4: 105.2%
- setting5: 110.0%
- setting6: 112.5%
initialHitBySetting:
- settingL: UNVERIFIED / 実用設定対象外
- setting2: ST初当り 1/328.0
- setting3: ST初当り 1/326.4
- setting4: ST初当り 1/303.9
- setting5: ST初当り 1/291.0
- setting6: ST初当り 1/271.5
baseGamesPer50: 約32.7G/50枚（設定2基準表記）
netIncrease:
- 擬似ボーナス: 約4.7枚/G
basicPayout:
- 初当り「エピローグボーナス」: 約100枚+α
- STAR BEATボーナス: 200枚 / 上位ST直行契機
- ST「ガールズバンドパーティ！」: 20G+α or 無限、ボーナス当選でST再セット
- ST中ライブジャック: 約100枚+α
- 上位ST「大ガールズバンドパーティ！」: 20G+α or 無限、実質ループ率84% or 93%、期待獲得約2800枚超（通常ST分込み）
confidence: ANALYSIS_HIGH + INDUSTRY / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は成立役でスターポイントを獲得し250ptで1周期。1周期平均約62G。
- 周期到達時に初当り抽選。設定2の周期到達時ボーナス期待度は27.5%、設定6は34.4%。
- 通常時モードはA/B/C/引き戻し/チャンス/天国の6種で最大天井は10/7/5/3/2/1周期。
- 通常時の最深天井は最大10周期（平均約620G）でST当選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_LIMITED_UNVERIFIED_DISPLAY_AND_GAKKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間、周期天井、内部状態、スターポイントをリセットし、モードを再抽選。
- モードはB以上が選択されるため最大7周期天井。
- スターポイントは内部でランダム加算される。なな徹はランダム加算を明記、必勝本系資料では0〜245pt加算表記があるが同ページに他機種由来と思われる項目混入があるため、0〜245ptの上限値は `ANALYSIS_SINGLE_WITH_PAGE_CONTAMINATION_CAUTION` としてのみ保持し、主要canonicalは「ランダム加算あり」とする。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_RESET_AND_MODE_B_PLUS

### carryOverBehavior
- 据え置き時は有利区間、周期天井、内部状態、スターポイント、モードを引き継ぐとする機種別資料が一致。
- 設定変更後7周期以内に当選しなかった場合は据え置き濃厚材料。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは有利区間、周期天井、内部モードを引き継ぐとする機種別資料を確認。
- 必勝本の設定変更/電源OFF-ON比較表は天井・モード・状態・スターポイント引継ぎを掲載する一方、同一ページに本機と無関係な「トランスポイント」「彩南町/彩南高校」表記が混入しているため、当該ページだけで全項目を高信頼固定しない。
- 純電源OFF→ONの内部状態・スターポイントについては必勝本比較表と据え置き資料の方向性は整合するが、ページ混入を考慮し `ANALYSIS_SINGLE_CAUTION` とする。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_CEILING_MODE / ANALYSIS_SINGLE_CAUTION_FOR_FULL_STATE_CONTRACT

### gameCounterReset
- 本機はゲーム数天井ではなく周期天井管理。
- 設定変更: 周期天井進行をリセットし、最大7周期へ短縮。
- 据え置き: 周期天井進行を引き継ぐ。
- 純電源OFF→ON: 周期天井進行を引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 最大10周期（平均約620G） / ST当選
resetCeiling: 最大7周期（平均約430G） / モードB以上濃厚 / ST当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモード再抽選。
- 設定変更時はモードB以上濃厚。通常B=最大7周期、通常C=最大5周期、引き戻し=最大3周期、チャンス=最大2周期、天国=1周期。
- 各モードへの設定変更時個別振り分けは十分な再探索後も固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_B_PLUS / UNVERIFIED_FOR_EXACT_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態リセット/再抽選、据え置きは引継ぎとする機種専用比較資料を確認。
- 純電源OFF→ONの内部状態は必勝本比較表で引継ぎだが、同ページに他機種由来と思われる項目混入があるため `ANALYSIS_SINGLE_CAUTION`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / ANALYSIS_SINGLE_CAUTION_FOR_POWER_CYCLE

### advantageousSectionReset
- 設定変更時: 有利区間リセット。
- 据え置き時: 有利区間引継ぎ。
- 純電源OFF→ON: 有利区間引継ぎとする機種別資料あり。
- なな徹は有利区間リセット契機を「設定変更時など」とし、設定変更以外のリセット恩恵は調査中。
- 有利区間ランプによる設定変更/据え置き判別は不可。
confidence: ANALYSIS_HIGH

### resetBenefits
- 周期天井が最大10周期→最大7周期へ短縮。
- モードB以上濃厚。
- スターポイントを内部でランダム加算。
- 設定2では設定変更後3周期（約190G）以内のST当選期待度76.5%（ディスク昇格抽選・ボーナス直撃抽選を含む）。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更時のみの主要な明確な不利要素は、公式/業界/主要解析/旧解析系統を変えて再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NO_PUBLIC_RESET_PENALTY_FOUND

### resetDetection
- 朝一7周期に到達してもST非当選なら据え置き濃厚材料。
- 7周期以内のST当選だけでは設定変更濃厚とはならない。
- 有利区間ランプでは設定変更/据え置き判別不可。
- スターポイントは朝一に内部加算されるため、浅い1周期目だけでは設定変更判別不可。
- `LバンドリS11` / `Lバンドリ！` / `オリンピアエステート` / `平和` と「ガックン/リールガックン/設定変更/据え置き/朝一」を組み合わせて再探索したが、本機固有のガックン条件・発生率を高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CYCLE_AND_LAMP / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 最大10周期（平均約620G）
resetCeiling: 最大7周期（平均約430G）
resetModeMinimum: モードB以上
resetWithin3CyclesStHitSetting2: 76.5%
resetStarPointInternalAdd: EXISTS / exactUpperBound 0-245pt is CAUTIONARY_SINGLE_SOURCE_PAGE
powerCycleAdvantageousSection: CARRY_OVER
powerCycleCeiling: CARRY_OVER
powerCycleMode: CARRY_OVER
powerCycleStateAndStarPoint: ANALYSIS_SINGLE_CAUTION
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更時最大天井: 7周期（平均約430G）。
- 設定2・設定変更後3周期（約190G）以内ST当選期待度: 76.5%。
- 設定変更時: モードB以上濃厚。
- 設定変更時モード個別振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts
- setting2機械割: 必勝本/一撃等は97.6%、HAZUSEは97.5%。canonicalは複数一致の97.6%、HAZUSE 97.5%を `CONFLICT_ROUNDING_OR_SOURCE_DIFFERENCE` として保持。
- 必勝本の「天井&設定変更」ページには本機の比較表内に「トランスポイント」「彩南町or彩南高校」など他機種由来と考えられる文字列が混在。天井最大7周期、電源OFF/ON時の主要引継ぎ方向は別資料でも照合した項目のみ採用し、混入項目はcanonicalに使用しない。

## missingFields
- 設定変更時のモードB/C/引き戻し/チャンス/天国個別振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時の内部状態・スターポイントを汚染のない別系統資料で直接全項目確認: UNVERIFIED_AFTER_RESEARCH / ANALYSIS_SINGLE_CAUTION
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH_FOR_IDENTITY_CORE_RESET_CEILING_AND_MODE / LIMITED_FOR_POWER_CYCLE_FULL_STATE_AND_GAKKUN
sources:
- 遊技日本 新機種記事: https://yugi-nippon.com/pachinko-new-machine/post-66472/
- Amusement Japan / P-WORLD業界記事: https://news.p-world.co.jp/articles/28735/amusement
- HAZUSE 型式・検定・基本情報: https://hazuse.com/hd/430327-2/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/84765/
- パチ&スロ必勝本 天井&設定変更（ページ混入注意）: https://hisshobon.com/machineinfo/84763/
- 一撃 機種TOP: https://1geki.jp/slot/l_bang_dream/
- 一撃 天井/設定変更: https://1geki.jp/slot/l_bang_dream/3/
- 一撃 初当りボーナス: https://1geki.jp/slot/l_bang_dream/61/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/823/25149/
- なな徹 天井: https://nana-press.com/kaiseki/machine/823/25146/
- なな徹 モード/スターポイント: https://nana-press.com/kaiseki/machine/823/25153/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/823/25147/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/823/25150/
- スロぱちクエスト 電源OFF/ON比較: https://www.slopachi-quest.com/article/bangdream-tenjou/
- ALL7 2024年11月導入一覧: https://www.all7.jp/plans/index/2024/11
