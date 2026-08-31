# くりぃむしちゅー

machineName: くりぃむしちゅー
manufacturer: ロデオ
releaseDate: 2007-09
generation: 5号機初期
systemType: ノーマル / BIG+REG / 演出用10G RT
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## payoutRateBySetting

| 設定 | 機械割（シミュレート） |
|---|---:|
| 1 | 97.4% |
| 2 | 98.5% |
| 3 | 101.2% |
| 4 | 104.0% |
| 5 | 106.7% |
| 6 | 110.8% |

- パチ＆スロ必勝本のシミュレート値を主値とする。
- HAZUSE DATAは整数丸めで97/98/101/104/107/111%。定義競合というより丸め差と判断し、CONFLICTにはしない。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | 全BIG合算 | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/485.45 | 1/753.29 | 1/295.21 |
| 2 | 1/485.45 | 1/753.29 | 1/295.21 |
| 3 | 1/442.81 | 1/675.63 | 1/267.49 |
| 4 | 1/420.10 | 1/661.98 | 1/257.00 |
| 5 | 1/387.79 | 1/624.15 | 1/239.18 |
| 6 | 1/359.97 | 1/569.88 | 1/220.66 |

- BIGはスーパーBIGとノーマルBIGの合算を物差し主値とする。
- HAZUSE DATAの合算値・REG値とも整合する。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

- 旧解析サイトの検索スニペットで1000円あたりゲーム数を確認できた値:
  - 設定1: 47.48G
  - 設定2: 50.01G
  - 設定3: 48.5G
- 設定4〜6の値は、`くりぃむしちゅー / ロデオ / 1000円 / 50枚 / コイン持ち / ベース / G数` を組み替え、当時解析・旧DB・回顧資料を再探索したが今回直接取得できず。
- 物差し用途では設定1の47.48Gを代表的な低設定ベースとして保持し、未取得値を推定補完しない。

信頼度: ANALYSIS_SINGLE

## netIncrease

通常の出玉増加用RTは非搭載。

- 特殊リプレイを契機に10Gの演出用プチRT「緊急事態」へ移行する。
- 後年回顧資料でも、特殊リプレイ契機の10G RTでボーナス前兆演出として機能したことを確認。

信頼度: ANALYSIS_HIGH

## basicPayout

- SUPER BIG（同色7揃い）: 平均約448枚
- NORMAL BIG（色違い7揃い）: 平均約348枚
- REG（7・BAR・7）: 平均約112枚

HAZUSE DATAの払い出し条件:
- SUPER BIG: 465枚超払い出しで終了
- NORMAL BIG: 420枚超払い出しで終了
- REG: 12Gまたは8回入賞で終了

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 人気お笑いコンビ「くりぃむしちゅー」とのタイアップ機。
- 5号機としては大型の448枚級SUPER BIGを搭載。
- 特殊リプレイ成立時に10Gの「緊急事態」へ入り、ボーナス期待を煽る演出用RTを採用。
- 通常時ゲーム数天井は確認されない。

## releaseDateEvidence

- フィールズ株式会社の2007-08-10公式リリースで、ロデオ製パチスロ機『くりぃむしちゅー』を全国発売し、「本年9月には実際に楽しんでいただける予定」と明記。
- フィールズの2008年3月期中間決算補足資料でも2007年9月発売タイトルとして掲載。
- 複数の後年機種DB・回顧資料でも2007年9月導入で一致。
- `9月3日 / 9月10日 / 9月17日 / 9月24日 / 納品 / 導入開始` を含めて再探索したが、具体納品日を一次/高信頼資料で確定できなかったため月精度 `2007-09` とする。

## resetBehavior

settingChangeBehavior: UNVERIFIED。本機固有の設定変更時内部処理を直接記した高信頼資料を確定できず。
carryOverBehavior: UNVERIFIED。据え置き時の本機固有挙動を直接確定できず。
powerCycleBehavior: UNVERIFIED。電源OFF→ONのみの場合の本機固有挙動を確定できず。
gameCounterReset: NOT_APPLICABLE / NONE_CONFIRMED。通常時ゲーム数天井は確認されない。
ceilingAfterReset: NONE_CONFIRMED。リセット短縮天井・変更天井は確認されない。
modeAfterReset: NONE_CONFIRMED。朝一専用モードや設定変更時モード振り分けは確認されない。
stateAfterReset: UNVERIFIED。10G演出用RT「緊急事態」中に設定変更/電断した場合の残G・内部RT状態処理は直接資料で確定できず。
advantageousSectionReset: NOT_APPLICABLE。
resetBenefits: NONE_CONFIRMED。公開された朝一専用恩恵は確認されない。
resetPenalties: NONE_CONFIRMED。公開された設定変更時専用不利要素は確認されない。
resetDetection: UNVERIFIED。本機固有のガックン・初期出目・液晶/ランプ挙動等による変更判別は確定できず。
numericResetData: NONE_CONFIRMED。公開された設定変更時モード振り分け、短縮天井、朝一当選率等は確認されない。

### resetBehavior QA note

`くりぃむしちゅー / ロデオ / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 緊急事態 / RT` を組み替え、P-WORLD、HAZUSE、必勝本、旧解析サイト、当時/後年回顧資料を横断した。通常時天井なしと10G演出用RTは確認できるが、設定変更/据え置き/電断による本機固有の内部状態処理・変更判別を裏付ける直接資料は得られなかったため推測しない。

## sources

取得日: 2026-09-01

1. フィールズ株式会社 — 株式会社ロデオ製パチスロ機『くりぃむしちゅー』発売のお知らせ（2007-08-10）
   - https://ircms.irstreet.com/contents/data_file.php?brand=79&filename=pdf_file.pdf&folder_contents=9517&src_data=38407&template=39
   - 全国発売、2007年9月にホールで遊技予定
   - reliability: OFFICIAL
2. パチ＆スロ必勝本 — くりぃむしちゅー 基本スペック
   - https://p.hisshobon.jp/machine/981/1/15099
   - 設定別BIG/REG/合算、シミュレート機械割、平均獲得枚数
   - reliability: ANALYSIS_HIGH
3. HAZUSE DATA — くりぃむしちゅー
   - https://data.hazuse.com/?machine_code=6S1216
   - 設定別ボーナス確率、丸めPAYOUT、ボーナス払い出し条件
   - reliability: ANALYSIS_HIGH
4. pachinko’s blog — ロデオ「パチスロ くりぃむしちゅー」の筺体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2007/09/creamStew
   - 2007年9月リリース、ボーナス確率整理
   - reliability: ANALYSIS_SINGLE
5. slotmaniac保存ページ検索インデックス — くりぃむしちゅーの解析,攻略
   - https://slotmaniac.web.fc2.com/kaiseki/creamstew.html
   - 1000円あたりG数（検索インデックスで設定1〜3を確認。本文は現時点503）
   - reliability: ANALYSIS_SINGLE
6. パチスロ天井パラダイス — 2007年導入機一覧
   - https://sloten7.com/years/y2007/
   - くりぃむしちゅー「天井なし」の整理
   - reliability: ANALYSIS_SINGLE
7. パチ7 — 有名人・芸能人タイアップパチスロの歴史
   - https://pachiseven.jp/articles/detail/11773
   - 448枚SUPER BIG、特殊リプレイ契機10GプチRT「緊急事態」
   - reliability: ANALYSIS_HIGH
8. パチ7 — スターと脇役～小さな分岐点～
   - https://pachiseven.jp/articles/detail/10261
   - 2007年9月リリース、448枚SUPER BIG、ボーナス合算、特殊リプレイ契機10G RT
   - reliability: ANALYSIS_HIGH

## missingFields

- 2007年9月内の具体納品/ホール導入日
- baseGamesPer50の設定4〜6直接値
- 設定変更/据え置き/電源OFF→ONの本機固有内部処理
- 「緊急事態」中の設定変更/電断時RT残G・内部状態処理
- 本機固有の設定変更判別挙動

## conflicts

重大な性能値CONFLICTなし。

- 機械割は必勝本の97.4〜110.8%とHAZUSEの整数表記97〜111%が存在するが、後者は丸め精度差と判断。
