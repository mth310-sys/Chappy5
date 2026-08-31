# デジパラダイス

machineName: デジパラダイス
manufacturer: デージー
releaseDate: 2007-09
generation: 5号機初期
systemType: ノーマル / BIG+REG / 同時成立あり
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## payoutRateBySetting

| 設定 | 機械割（シミュレート） |
|---|---:|
| 1 | 96.10% |
| 2 | 97.74% |
| 3 | 99.56% |
| 4 | 101.38% |
| 5 | 103.45% |
| 6 | 105.80% |

信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | BIG合成 | REG | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/289.98 | 1/471.48 | 1/179.55 |
| 2 | 1/281.27 | 1/455.11 | 1/173.84 |
| 3 | 1/273.07 | 1/434.01 | 1/167.61 |
| 4 | 1/265.33 | 1/414.78 | 1/161.82 |
| 5 | 1/257.00 | 1/394.80 | 1/155.67 |
| 6 | 1/249.19 | 1/376.64 | 1/149.97 |

赤7BIG/青7BIGの個別確率もパチマガスロマガで公開されているが、物差し用途ではBIG合成を主値とする。
信頼度: ANALYSIS_HIGH

## baseGamesPer50

| 設定 | 1000円あたりゲーム数 |
|---|---:|
| 1 | 35.60G |
| 2 | 35.83G |
| 3 | 36.09G |
| 4 | 36.38G |
| 5 | 36.71G |
| 6 | 37.27G |

信頼度: ANALYSIS_HIGH

## netIncrease

該当なし。RT等の付加機能を搭載しないノーマルタイプ。

## basicPayout

- BIG: 345枚超払い出しで終了、純増約312枚
- REG: 105枚超払い出しで終了、純増約104枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- デージーの5号機第一弾。
- リール上部7セグを特徴とするノーマルタイプ。
- 小役との同時成立あり。
- RT/ART/AT/CZは搭載しない。

## releaseDateEvidence

- 2007-07-06開催の電遊協5社合同内覧会に出品され、当時記事では「9月ごろ発売予定」。
- 当時パチスロ資料では「2007/9/下発売」と整理されている。
- 9月内の具体納品/ホール導入日は、`デジパラダイス / DIGIParadise / デージー / 納品 / 導入 / 9月 / 2007` 等で業界記事・旧DB・回顧資料を再探索したが確定できず、releaseDateは月精度 `2007-09` とする。

## resetBehavior

settingChangeBehavior: UNVERIFIED。設定変更時に通常内部状態・成立済みボーナス等をどう扱うか、本機固有資料で確定できず。
carryOverBehavior: UNVERIFIED。据え置き時の本機固有挙動は確定できず。
powerCycleBehavior: UNVERIFIED。電源OFF→ONのみの場合の本機固有挙動を確定できず。
gameCounterReset: NOT_APPLICABLE / NONE_CONFIRMED。通常時ゲーム数天井・RTゲーム数は確認されない。
ceilingAfterReset: NONE_CONFIRMED。リセット短縮天井なしとみられるが、専用数値の公開は確認できず。
modeAfterReset: NONE_CONFIRMED。朝一/設定変更専用モードの公開情報なし。
stateAfterReset: NONE_CONFIRMED。比較対象となるRT/ART/CZ内部状態を搭載しない。
advantageousSectionReset: NOT_APPLICABLE。
resetBenefits: NONE_CONFIRMED。公開された朝一専用恩恵なし。
resetPenalties: NONE_CONFIRMED。公開された設定変更時専用不利要素なし。
resetDetection: UNVERIFIED。ガックン、初期出目、7セグ表示等を用いた本機固有の変更判別資料を確定できず。
numericResetData: NONE_CONFIRMED。公開朝一数値なし。

### resetBehavior QA note

`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / 7セグ` を機種名・メーカー名と組み替え、当時解析・旧DB・回顧資料を横断した。ノーマルタイプでRT等がないことは確認できる一方、設定変更/電断の本機固有挙動は十分な根拠を得られないため推測しない。

## sources

取得日: 2026-09-01

1. パチマガスロマガ — デジパラダイス 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/dg_slot/01/a.php
   - ノーマル/同時成立、RTなし、BIG約312枚、REG約104枚
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — デジパラダイス ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/dg_slot/01/h.php
   - 設定別BIG/REG/合算、シミュレート機械割
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — デジパラダイス 小役/1000円ゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/dg_slot/01/c.php
   - 設定別1000円ゲーム数
   - reliability: ANALYSIS_HIGH
4. Pマンズ保存記事 — 電遊協5社が5号機合同展示会（2007-07-10更新）
   - https://p-mans.blogspot.com/2007/07/
   - 2007-07-06合同内覧会、デージー「デジパラダイス」、9月ごろ発売予定
   - reliability: INDUSTRY
5. パチスロ業界初まとめ — 2007年当時更新記録
   - https://slothistory.com/kousin_kako04.html
   - デジパラダイスを2007/9/下発売として整理
   - reliability: ANALYSIS_SINGLE

## missingFields

- 2007年9月内の具体納品/ホール導入日
- 設定変更/据え置き/電源OFF→ONの本機固有挙動
- 本機固有の変更判別挙動

## conflicts

なし。現時点で採用性能値に重大な資料競合は確認していない。
