# パチスロ暴れん坊将軍

machineName: パチスロ暴れん坊将軍
formalModelName: パチスロアバレンボウショウグンB
manufacturer: 藤商事
releaseDate: 2007-03-04
generation: 5号機初期
systemType: ボーナス+RT / 3種ボーナス

## releaseDate 根拠

前回handoffでは2007年2月未処理候補に含まれていたが、当時のグリーンべると記事で「納品は3月4日から開始する予定」、2007-03-07のサン電子発表でも「3月にホールに登場」と確認できるため、本DBでは2007-03-04をホール導入基準日として扱う。

信頼度: INDUSTRY

## payoutRateBySetting

5号機クロニクル掲載値:

- 設定1: 96.7%
- 設定2: 99.9%
- 設定3: 103.3%
- 設定4: 106.0%
- 設定5: 108.5%
- 設定6: 110.4%

現時点では同一の設定別機械割表を独立した別系統資料で完全照合できていないため、値自体は保存しつつ信頼度はANALYSIS_SINGLEとする。

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

パチマガスロマガ旧攻略で、ボーナス単独合成確率と「全ボーナス成立に占める単独割合」が設定別に公開されている。そこから総ボーナス合算を定義どおり逆算した参考値:

- 設定1: 約1/212.08（単独合成1/1820.44、単独比率11.65%）
- 設定2: 約1/196.76（1/1560.38、12.61%）
- 設定3: 約1/182.09（1/1285.02、14.17%）
- 設定4: 約1/173.38（1/1149.75、15.08%）
- 設定5: 約1/165.50（1/1040.25、15.91%）
- 設定6: 約1/156.80（1/963.76、16.27%）

計算式: 総ボーナス確率分母 = 単独ボーナス合成確率分母 × 単独成立比率。

これは公開された2値からの算術換算であり、元資料が総合算表を直接掲載した値ではないため `DERIVED_FROM_ANALYSIS_HIGH` として定義分離する。個別の赤7BIG/青7BIG/CB総確率は今回、高信頼な直接表を回収できなかったため推測で分解しない。

信頼度: ANALYSIS_HIGH（元データ） / DERIVED

## baseGamesPer50

パチマガスロマガ旧攻略の1000円あたりゲーム数（50枚等価物差し）:

- 設定1: 35.52G
- 設定2: 35.79G
- 設定3: 36.07G
- 設定4: 36.58G
- 設定5: 37.10G
- 設定6: 37.76G

注: 同資料は3GのプチRTを含めない通常時ベースとして掲載。

信頼度: ANALYSIS_HIGH

## netIncrease

- スーパー暴れん坊チャンス: 赤7SUPER BIG後に突入する最大250GのRT
- 当時業界記事とメーカー公式で最大250Gを確認
- RT純増/Gの明確な公開値は今回の複数系統探索では確定できず UNVERIFIED
- チェリー成立時は3Gの「暴れん坊チャンス」へ移行し、250G RTが実質終了する仕様を当時業界記事で確認

信頼度: OFFICIAL / INDUSTRY（RT構造）

## basicPayout

メーカー公式、P-WORLD、当時グリーンべると、パチマガスロマガ旧攻略を照合。

- SUPER BIG BONUS（赤7）: 346枚以上払い出しで終了 / 実純増目安 約260枚 / 終了後最大250G RT
- NORMAL BIG BONUS（青7）: 346枚以上払い出しで終了 / 実純増目安 約260枚
- CHALLENGE BONUS（BAR）: 133枚以上払い出しで終了 / 実純増目安は資料差あり
  - グリーンべると当時記事: 約110枚
  - パチマガスロマガ旧攻略: 約100枚

CB実純増は約100枚と約110枚で定義/手順差または丸め差の可能性があるが、平均せずCONFLICTとして保持する。

信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ライン / 3枚掛け専用
- RTは2種類
- 「暴れん坊チャンス」: チェリー当選後3G
- 「スーパー暴れん坊チャンス」: 赤7SUPER BIG後、最大250G
- スーパー暴れん坊チャンス終了条件: 規定G数消化、ボーナス成立、チェリー成立による3G RTへの移行
- 当時グリーンべるとではRTにパンク回避を設けず、チェリー当選で3G RTへ移行し終了すると説明
- ボーナス当選型の通常ノーマル+RT機で、公開されたゲーム数天井・モード管理型初当たりは今回確認できない

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 設定変更時にRT状態・チェリー起点3G RT・ボーナス後250G RTがどのように初期化されるか、本機固有の高信頼公開資料を確認できず UNVERIFIED
- carryOverBehavior: 据え置き時のRT状態引継ぎについて、本機固有の高信頼資料で確定できず UNVERIFIED
- powerCycleBehavior: 電源OFF→ONのみの場合のRT状態処理を高信頼資料で確定できず UNVERIFIED
- gameCounterReset: 通常時のゲーム数到達型ボーナス天井は確認できず。天井用ゲーム数カウンタとして比較可能な公開情報なし
- ceilingAfterReset: ゲーム数天井短縮の公開情報なし / 非該当とみられるが、設定変更専用の内部救済が存在しないことまで一次資料で断定できないため「公開確認なし」とする
- modeAfterReset: 通常時モード管理型の公開情報を確認できず。設定変更専用モードも確認できず
- stateAfterReset: RT状態の設定変更時処理はUNVERIFIED
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 設定変更・朝一固有の主要恩恵を確認できず
- resetPenalties: 設定変更固有の主要不利要素を確認できず
- resetDetection: 本機固有のガックン、出目、液晶表示等による設定変更判別を高信頼で確認できず
- numericResetData: 公開された設定変更時専用の比較可能数値は確認できず

### resetBehavior 再探索メモ

「パチスロ暴れん坊将軍 / 暴れん坊将軍 / パチスロアバレンボウショウグンB / 藤商事」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT引継ぎ / 暴れん坊チャンス / スーパー暴れん坊チャンス / ガックン」を組み合わせて検索。メーカー公式、P-WORLD、当時グリーンべると、パチマガスロマガ旧攻略、5号機クロニクル、当時実戦記まで横断した。RT通常仕様は確認できたが、設定変更・据え置き・電断での内部RT状態処理を直接説明する高信頼資料は回収できなかったため推測しない。

## sources

取得日: 2026-08-31

1. 藤商事公式 — パチスロ 暴れん坊将軍
   - https://www.fujimarukun.co.jp/products/abare_slot/
   - 最大250G RT、SUPER BIG 346枚以上+RT、NORMAL BIG 346枚以上、CHALLENGE BONUS 133枚以上
   - reliability: OFFICIAL
2. グリーンべると — あの「暴れん坊」が今度はパチスロで活躍（2007-01-26）
   - https://web-greenbelt.jp/00003966/
   - 納品2007-03-04予定、3G/最大250Gの2種RT、BIG約260枚、CB約110枚
   - reliability: INDUSTRY
3. P-WORLD — パチスロ暴れん坊将軍
   - https://www.p-world.co.jp/machine/database/4574
   - 型式名パチスロアバレンボウショウグンB、各ボーナス規定払い出し
   - reliability: INDUSTRY
4. パチマガスロマガ旧攻略 — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/06/a.php
   - 5号機/5ライン/3枚掛け、BIG約260枚、CB約100枚、最大250P RT
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧攻略 — 小役確率/1000円プレイ数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/06/c.php
   - 設定別35.52〜37.76G/1000円、3G RT除外
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ旧攻略 — ボーナス単独抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/06/k.php
   - 単独合成1/1820.44〜1/963.76、全ボーナス中の単独割合11.65〜16.27%
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — 藤商事5号機一覧
   - https://5goki.com/fuji
   - 2007/3、機械割96.7〜110.4%
   - reliability: ANALYSIS_SINGLE
8. サン電子 NEWSCAST — 『パチスロ暴れん坊将軍』配信開始（2007-03-07）
   - https://newscast.jp/news/797453
   - 実機の3月ホール登場と連動した公式アプリ配信
   - reliability: INDUSTRY

## missingFields

- 赤7BIG/青7BIG/CBそれぞれの総成立確率の直接表
- RT純増枚数/G
- 設定変更/据え置き/電源OFF→ON時のRT状態処理
- 本機固有のresetDetection（ガックン等）

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## conflicts

- CB実純増: グリーンべると当時記事 約110枚 / パチマガスロマガ旧攻略 約100枚。平均せず双方を保持。
- 導入月は前handoffの2007年2月候補表記を訂正。当時業界一次系資料に基づき2007-03-04納品開始予定として登録。
