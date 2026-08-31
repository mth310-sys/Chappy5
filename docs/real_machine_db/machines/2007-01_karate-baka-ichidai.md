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
- 天井機能は非搭載。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 本機固有の設定変更時RT/CZ/内部状態処理を高信頼資料で確認できず UNVERIFIED
- carryOverBehavior: 据え置き時のRT/CZ状態引継ぎを高信頼資料で確認できず UNVERIFIED
- powerCycleBehavior: 電源OFF→ONのみの固有挙動を確認できず UNVERIFIED
- gameCounterReset: 天井非搭載のため天井ゲーム数は非該当。RT/CZ中の電源断処理はUNVERIFIED
- ceilingAfterReset: 天井非搭載のため非該当
- modeAfterReset: 通常時の朝一専用モードを確認できず
- stateAfterReset: 朝一のCZ/RT優遇等を確認できず
- advantageousSectionReset: 非該当（5号機初期、有利区間制度導入前）
- resetBenefits: 公開された設定変更時の朝一恩恵を確認できず
- resetPenalties: 公開された設定変更時の主要不利要素を確認できず
- resetDetection: ガックン、表示、リール挙動等の本機固有変更判別情報を高信頼資料で確認できず
- numericResetData: なし / UNVERIFIED

### resetBehavior 再探索メモ

「空手バカ一代 / ゴールドオリンピア / オリンピア / 2007」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT引継ぎ / 百人組手 / 天井 / ガックン」を組み合わせ、当時解析・P-WORLD・後年回顧まで横断した。天井非搭載は確認できたが、朝一変更固有挙動は確定できなかった。

## sources

取得日: 2026-08-31

1. パチマガスロマガ — 空手バカ一代 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/03/a.php
   - 5号機/4ライン、ボーナス獲得枚数、RT基本構造
   - reliability: ANALYSIS_HIGH
2. パチ7 — 3枚戦争～空手バカ一代
   - https://pachiseven.jp/articles/detail/11089
   - 2007年1月デビュー、設定別出玉率、合算、RT約+0.5枚/G、10000G/ボーナス成立終了
   - reliability: ANALYSIS_HIGH
3. pacnk — 空手バカ一代 設定判別ツール
   - https://pacnk.com/slot/tools/sh_karatebakaichidai.html
   - 設定別合算・PAYOUT、天井非搭載
   - reliability: ANALYSIS_SINGLE
4. P-WORLD — 空手バカ一代
   - https://www.p-world.co.jp/machine/database/4548
   - 5号機機種ページ、当時掲示板・機種存在確認
   - reliability: ANALYSIS_SINGLE
5. 5号機クロニクル — 平和＆オリンピア
   - https://5goki.com/heiwa-olympia
   - 機械割の照合に使用。ただし同ページの導入月/ゲーム性記述には他資料との不整合があるため数値照合のみ利用
   - reliability: ANALYSIS_SINGLE
6. 後年回顧記事
   - https://chinta-slo-kaigo.com/5goukibesttaihokarate/
   - 百人組手が次回ボーナスまで継続するRTであることを補助確認
   - reliability: ANALYSIS_SINGLE

## missingFields

- baseGamesPer50
- ボーナス4系統の設定別個別確率（今回高信頼表未確保）
- resetBehaviorの本機固有設定変更/据え置き/電源断挙動
- resetDetection

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## conflicts

- 5号機クロニクルには2007年11月・BIG+50G RT等、当時解析や複数回顧資料と整合しない記述がある。本DBでは2007年1月、RT百人組手仕様を採用し、同サイトは機械割照合だけに限定使用する。