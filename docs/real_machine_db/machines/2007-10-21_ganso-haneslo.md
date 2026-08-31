# 元祖ハネスロ

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: 元祖ハネスロ
manufacturer: オーイズミ
releaseDate: 2007-10-21（納品開始）
generation: 5号機初期
systemType: ノーマル / ボーナス主体 / 2リール+倍倍リール / 同時成立あり

## releaseDate evidence

- グリーンべると2007-09-07当時記事で「納品は10月21日から」と明記。
- 5号機クロニクルも導入時期を2007/10として整理。
- 2007-10-10〜20について、当時ニュース日付・旧発売一覧・回顧DBを再監査したが、今回main未登録でこの機種より早い具体導入日を確定できる候補は確認できなかったため、HANDOFF方針どおり本機へ前進。

信頼度: INDUSTRY

## payoutRateBySetting

パチマガスロマガ（シミュレート値）:
- 設定1: 95.57%
- 設定2: 98.75%
- 設定3: 102.66%
- 設定4: 106.42%
- 設定5: 109.71%
- 設定6: 113.00%

後年回顧資料では 95.4 / 98.7 / 102.7 / 106.5 / 109.8 / 113.1% とほぼ丸め差で整合。

注意: 5号機クロニクルの元祖ハネスロ欄は 98.7 / 99.6 / 100.4 / 103.1 / 107.0 / 111.2% と掲載しているが、これは2016年「元祖ハネスロ再び」の値と完全一致しており、同ページ内で初代の筐体欄に「再び」リール配列も表示されるため資料混入疑義が強い。本DBでは平均せず `CONFLICT_SOURCE_CONTAMINATION_SUSPECTED` として保持し、初代当時解析値を性能本線とする。

信頼度: ANALYSIS_HIGH / CONFLICT

## initialHitBySetting

パチマガスロマガ:

| 設定 | 赤7×1 | 赤7×2 | 赤7×3 | ボーナス合成 |
|---:|---:|---:|---:|---:|
| 1 | 1/229.95 | 1/297.89 | 1/327.68 | 1/92.96 |
| 2 | 1/240.06 | 1/283.71 | 1/287.44 | 1/89.53 |
| 3 | 1/251.09 | 1/270.81 | 1/256.00 | 1/86.35 |
| 4 | 1/261.10 | 1/259.04 | 1/230.76 | 1/83.17 |
| 5 | 1/269.69 | 1/248.24 | 1/214.17 | 1/80.61 |
| 6 | 1/276.52 | 1/238.31 | 1/199.80 | 1/78.02 |

- K-Naviも設定6の合成を約1/78と説明。
- 後年回顧資料も設定1約1/93〜設定6約1/78として整合。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ（1000円あたり）:
- 設定1: 37.92G
- 設定2: 38.25G
- 設定3: 39.28G
- 設定4: 40.15G
- 設定5: 41.05G
- 設定6: 42.00G

信頼度: ANALYSIS_HIGH

## netIncrease

- RT / ARTによる継続純増はなし。ボーナス主体のノーマルタイプ。
- 後継機のRT仕様を初代へ流用しない。

## basicPayout

パチマガスロマガ / グリーンべると:
- 赤7×1: 74枚超払い出し終了 / 純増約60枚
- 赤7×2: 149枚超払い出し終了 / 純増約120枚
- 赤7×3: 224枚超払い出し終了 / 純増約180枚

- メイン2リールで赤7が揃い、右側の「倍倍リール」×1〜×3で獲得性能が変化。
- 小役・ボーナスとも原則完全目押し不要。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 同時成立ありのノーマルタイプ。
- ボーナス合成は設定1 1/92.96〜設定6 1/78.02。
- RT/ART/AT/CZの継続出玉機能は初代について確認なし。
- 通常時ゲーム数天井も今回の本機固有攻略資料では確認なし。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `元祖ハネスロ / オーイズミ / 2リール / 倍倍リール` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 変更判別` を組み替え、当時解析・業界記事・旧DB・回顧資料を再探索。
- 設定変更時専用の天井、モード、RT/ART/CZ恩恵は `NONE_CONFIRMED`。
- 本機固有のリール初期化/初期出目等は `UNVERIFIED`。

carryOverBehavior:
- 通常時ゲーム数天井・モード・状態の持越し対象は `NONE_CONFIRMED`。
- 成立済みボーナス等の電断/設定変更処理について本機固有資料は `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみで朝一専用モード/天井変化がある資料は `NONE_CONFIRMED`。
- リール初期位置・告知状態等の本機固有差は `UNVERIFIED`。

gameCounterReset:
- 通常時ゲーム数天井: `NONE_CONFIRMED`。

ceilingAfterReset:
- リセット短縮天井: `NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用モード / 設定変更専用モード: `NONE_CONFIRMED`。

stateAfterReset:
- 通常時の公開内部状態再抽選: `NONE_CONFIRMED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一専用RT/ART/CZ、短縮天井、設定変更時だけの当選優遇: `NONE_CONFIRMED`。

resetPenalties:
- 設定変更時固有の公開不利要素: `NONE_CONFIRMED`。

resetDetection:
- 本機固有ガックン、初期出目、液晶/ランプ等による変更判別は十分再探索後も直接資料を確定できず `UNVERIFIED`。

numericResetData:
- 公開朝一数値 / 短縮天井G / 朝一モード振り分け / リセット恩恵発生率: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. グリーンべると — 『元祖ハネスロ』、真の遊びやすさを追求
   - https://web-greenbelt.jp/00006455/
   - 2007-09-07。当時業界記事。納品10/21〜、2リール+倍倍リール、純増60/120/180枚。
   - reliability: INDUSTRY
2. パチマガスロマガ — 元祖ハネスロ 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/15/a.php
   - ノーマル/同時成立あり、規定払い出し74/149/224枚、純増約60/120/180枚。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 元祖ハネスロ ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/15/h.php
   - 設定別3種ボーナス確率、合成1/92.96〜1/78.02、シミュレート機械割95.57〜113.00%。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 元祖ハネスロ 小役確率/1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/15/c.php
   - 37.92〜42.00G/1000円。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 元祖ハネスロ 攻略トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/15/oizumi_slot_15.php
   - 「攻め時・ヤメ時→特にナシ」を確認。
   - reliability: ANALYSIS_HIGH
6. K-Navi — 元祖ハネスロ
   - https://p-kn.com/slot/651/
   - ノーマルタイプ、設定6ボーナス約1/78、224/149/74枚超払い出し終了。
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — オーイズミ5号機一覧
   - https://5goki.com/oizumi
   - 2007/10。初代欄の機械割が2016「再び」と完全一致するためCONFLICT資料として保持。
   - reliability: SECONDARY_DB / CONFLICT
8. ハネスロシリーズ回顧
   - https://www.marimo0925.net/pachislot-kikaiwariranking-haneslo-ban/
   - 初代機械割95.4〜113.1%、合成約1/93〜1/78、純増60/120/180枚。
   - reliability: RETROSPECTIVE_SECONDARY

## missingFields

- 設定変更/据え置き/電源OFF→ON時の本機固有リール初期化・成立済みボーナス状態処理
- 本機固有の変更判別（ガックン等）

## conflicts

- 5号機クロニクルの初代機械割 `98.7〜111.2%` は、同サイト掲載の2016年「元祖ハネスロ再び」と完全一致し、初代欄で「再び」のリール配列も参照されている。パチマガ当時解析 `95.57〜113.00%` と競合するため平均せず、資料混入疑義を明記して保持。

## notes

- 10/10〜20境界を再監査後、具体納品日が確定している次候補として追加。
- 性能コアは設定別ボーナス、機械割、50枚相当ベース、基本獲得性能まで揃ったため `COMPLETE_CORE`。
- resetBehaviorは別管理で `PARTIAL`。
