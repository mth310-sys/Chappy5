# 空手バカ一代

machineName: 空手バカ一代
manufacturer: ゴールドオリンピア / オリンピア
releaseDate: 2007-01
generation: 5号機初期
systemType: ボーナス+RT

## payoutRateBySetting

設定1〜6: 96.6 / 98.5 / 100.9 / 102.3 / 104.1 / 105.7%。複数資料で一致。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

ボーナス合算: 設定1 1/341.3、2 1/324.4、3 1/293.8、4 1/284.9、5 1/274.2、6 1/269.7。

本機は空手BIG / 通常BIG / CB / REGの4系統。個別確率は今回の比較可能な高信頼表を十分に確保できなかったため、合算を主要初当たりとして保存。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

「空手バカ一代 1000円 / 50枚 / ベース / コイン持ち / 小役確率 / オリンピア」を変えて再探索したが、設定別または代表50枚ゲーム数の明示値を確定できず UNVERIFIED。

## netIncrease

RT「百人組手」: 約+0.5枚/G。終了条件は10000G消化またはボーナス成立で、実質次回ボーナスまで継続する長時間RT。主にREG以外のボーナス後CZから突入リプレイ成立で移行する。

信頼度: ANALYSIS_HIGH

## basicPayout

パチマガスロマガ当時解析:
- 空手BIG: 441枚超払出終了、純増約320枚
- 通常BIG: 281枚超払出終了、純増約200枚
- CB: 151枚超払出終了、純増約100枚
- REG: 151枚超払出終了、純増約100枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 4ライン / 3枚掛け専用。
- REG以外のボーナス後にCZへ移行し、突入リプレイ（ベル・ベル・リプレイ）成立でRT「百人組手」へ。
- 通常時からのRT突入も稀に存在するとの後年資料あり。
- RT「百人組手」は約+0.5枚/G、10000G消化またはボーナス成立で終了する実質次回ボーナス型。
- REG後の隠れCZは短く、後年実戦回顧では設定1〜4時の突入リプレイ1/32、設定6ではRT期待度約10%との記述あり。ただしリセット専用値ではないためnumericResetDataには採用しない。
- 天井機能は非搭載。

## resetBehavior

resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED

- settingChangeBehavior: 本機固有の設定変更時RT/CZ/成立済みボーナス・内部状態処理を、機種名表記揺れ・ゴールドオリンピア/オリンピア・百人組手・修行・設定変更/リセット/朝一で再探索したが直接契約を固定できず UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: 据え置き時のRT「百人組手」残状態/CZ状態/成立済みボーナス状態の機種固有引継ぎを直接確認できず UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: 電源OFF→ONのみの場合のRT/CZ残状態、成立済みボーナス/リプレイ高確状態等の機種固有処理を確認できず UNVERIFIED_AFTER_RESEARCH
- gameCounterReset: 天井非搭載のため通常時天井ゲーム数は NOT_APPLICABLE。RTは最大10000GだがこれはRT継続上限であり通常時天井ではない。RT中電断時の残G契約はUNVERIFIED_AFTER_RESEARCH
- ceilingAfterReset: NOT_APPLICABLE（通常時天井非搭載）
- modeAfterReset: 設定変更専用の朝一モード・短縮天井を確認できず。通常時のRT突入/CZ構造をリセット恩恵として扱わない
- stateAfterReset: 設定変更時のCZ/RT朝一優遇、成立済みボーナス・ボーナス成立後リプレイ高確等の処理はUNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE（5号機初期、有利区間制度導入前）
- resetBenefits: 公開された設定変更専用の主要朝一恩恵を確認できず
- resetPenalties: 公開された設定変更専用の主要不利要素を確認できず
- resetDetection: ガックン、初期出目、表示、RT/CZ開始状態等を含む本機固有の変更判別情報を、当時解析・回顧・旧ブログ系まで再探索したが直接固定できず UNVERIFIED_AFTER_RESEARCH
- numericResetData: 設定変更専用の公開当選率、朝一RT/CZ移行率、短縮G数等は確認できず

### resetBehavior 再探索メモ — 2026-09-12

従来検索に加え、「空手バカ一代 スロット 朝一 百人組手」「空手バカ一代 リセット 百人組手」「空手バカ一代 設定変更後」「空手バカ一代 ガックン」「空手バカ一代 据え置き」「ゴールドオリンピア 空手バカ一代 電源」等へ分岐し、パチマガスロマガ、パチ7回顧、当時2007年個人実戦記、設定判別DB、旧機種資料を横断。

確認できたのは、REG以外のボーナス後CZから突入リプレイでRTへ入ること、RTが約+0.5枚/G・10000Gまたはボーナス成立まで継続すること、通常時から稀にRT突入があること、通常時天井非搭載まで。設定変更/据え置き/純電断の3者別にRT/CZ/成立済みボーナス状態をどう処理するかは直接資料を固定できなかった。5号機一般論や他機種挙動からは補完しない。

## sources

取得日: 2026-09-12

1. パチマガスロマガ — 空手バカ一代 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/03/a.php
   - 5号機/4ライン、ボーナス獲得枚数、REG以外のボーナス後CZ、RT基本構造
   - reliability: ANALYSIS_HIGH
2. パチ7 — 3枚戦争～空手バカ一代
   - https://pachiseven.jp/articles/detail/11089
   - 2007年1月デビュー、設定別出玉率/合算、RT約+0.5枚/G、10000G/ボーナス成立終了、通常時から稀にRT突入、REG後隠れCZの実戦回顧
   - reliability: ANALYSIS_HIGH
3. pacnk — 空手バカ一代 設定判別ツール
   - https://pacnk.com/slot/tools/sh_karatebakaichidai.html
   - 設定別合算・PAYOUT、天井非搭載
   - reliability: ANALYSIS_SINGLE
4. P-WORLD — 空手バカ一代
   - https://www.p-world.co.jp/machine/database/4548
   - 5号機機種ページ、機種存在確認
   - reliability: ANALYSIS_SINGLE
5. 5号機クロニクル — 平和＆オリンピア
   - https://5goki.com/heiwa-olympia
   - 機械割照合のみ。導入月/ゲーム性記述は他資料との不整合があるため限定利用
   - reliability: ANALYSIS_SINGLE
6. 後年回顧記事
   - https://chinta-slo-kaigo.com/5goukibesttaihokarate/
   - 百人組手が次回ボーナスまで継続するRTであることを補助確認
   - reliability: ANALYSIS_SINGLE
7. 2007年当時個人実戦記 — 貧弱スロ日記
   - https://plaza.rakuten.co.jp/paruna2007/diaryall/
   - 導入当時の空手バカ一代実戦記・RT/CZ挙動の補助資料。リセット契約の直接根拠には不使用
   - reliability: RETROSPECTIVE_SINGLE

## missingFields

- baseGamesPer50
- ボーナス4系統の設定別個別確率（今回高信頼表未確保）
- resetBehaviorの本機固有設定変更/据え置き/電源断時RT・CZ・成立済みボーナス処理
- resetDetection

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED

## conflicts

- 5号機クロニクルには2007年11月・BIG+50G RT等、当時解析や複数回顧資料と整合しない記述がある。本DBでは2007年1月、RT百人組手仕様を採用し、同サイトは機械割照合だけに限定使用する。