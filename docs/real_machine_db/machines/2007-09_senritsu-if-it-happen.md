# 戦慄-IF IT HAPPEN

machineName: 戦慄-IF IT HAPPEN
manufacturer: エール
releaseDate: 2007-09
generation: 5号機初期
systemType: ボーナス + RT
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## 導入時期・機種同定

- K-Navi当時記事（2007-08-17）で、株式会社エールの新機種 `戦慄-IF IT HAPPEN`、型式名 `戦慄DD` と確認。
- 同記事では2007-08-23に新機種プレス発表会予定と記載。
- P-WORLD機種DBではメーカー `エール`、型式名 `戦慄ＤＤ`、導入開始 `2007年09月`。
- 2007-08-28の当時業界記事保存でもエール第一弾としてプレス説明会開催を確認。
- 9月内の具体的な全国納品/ホール導入日は、`戦慄 / 戦慄DD / IF IT HAPPEN / エール / 納品 / 導入 / 新台` 等へ表記を変え、当時記事・旧DB・後年整理を再探索したが月精度以上を確定できず `UNVERIFIED`。

## 性能コア

### ボーナス確率

| 設定 | ボーナス合成 |
|---|---:|
| 1 | 1/177.1 |
| 2 | 1/170.7 |
| 3 | 1/164.7 |
| 4 | 1/159.1 |
| 5 | 1/153.8 |
| 6 | 1/149.0 |

- HAZUSEの設定別合成確率を採用。旧個人保存資料でも概ね `1/177 → 1/148` と一致し、丸め差の範囲。
- ボーナスは赤7/黒7の2種類のSENRITSU BONUSで、P-WORLD/HAZUSEともに `251枚を超える払い出しで終了` を確認。
- 旧保存資料では純増目安を約182枚としているが、一次・別解析系統で十分再照合できていないため `ANALYSIS_SINGLE`。
- HAZUSEおよび旧保存資料で、3種類の1枚役契機で突入するRT `戦慄タイム` を確認。
- 戦慄タイムは10G消化またはボーナス成立で終了。旧保存資料では「ほぼ現状維持」とされる。
- payoutRateBySetting: HAZUSEが `調査中`、別系統現存資料でも設定別機械割を確定できず `UNVERIFIED`。
- baseGamesPer50: `50枚 / 1000円 / ベース / コイン持ち / 戦慄DD` 等へ検索語を変えて再探索したが比較可能値を確定できず `UNVERIFIED`。
- netIncrease: RTの厳密な純増/Gは現存高信頼資料で確定できず `UNVERIFIED`。旧保存資料の「ほぼ現状維持」は定性的参考としてのみ保持。

## v0.7 resetBehavior

検索語を `戦慄 / 戦慄DD / IF IT HAPPEN / エール / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT / ガックン` で組み替え、当時解析・旧DB・業界記事・後年機種DBを横断。

- settingChangeBehavior: `UNVERIFIED`。設定変更時のRT状態/残G、内部状態の初期化・引継ぎを確定できる本機固有資料なし。
- carryOverBehavior: `UNVERIFIED`。据え置き時のRT状態/残G・内部状態の引継ぎを確定できず。
- powerCycleBehavior: `UNVERIFIED`。電源OFF→ONのみのRT状態/残G・内部状態処理を確定できず。
- gameCounterReset: 通常時ゲーム数天井を示す高信頼資料は確認できず `NONE_CONFIRMED`。RT残Gの設定変更時処理は `UNVERIFIED`。
- ceilingAfterReset: 設定変更時の短縮天井/特殊天井は `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/設定変更専用モードは `NONE_CONFIRMED`。
- stateAfterReset: RT内部状態・残Gの再抽選/引継ぎは `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機初期・有利区間制度前）。
- resetBenefits: 公開された朝一/設定変更時専用恩恵は `NONE_CONFIRMED`。
- resetPenalties: 公開された設定変更時固有の不利要素は `NONE_CONFIRMED`。
- resetDetection: ガックン、初期出目、液晶/フィギュア状態等による本機固有の変更判別は十分再探索後も `UNVERIFIED`。
- numericResetData: 公開朝一数値は `NONE_CONFIRMED`。

## sources

- K-Navi 当時業界記事（2007-08-17）: https://p-kn.com/topics/news/311/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/4878
- HAZUSE 機種解析: https://hazuse.com/machine/pachislot/7S0536/
- 当時個人保存資料「機種情報 戦慄DD」: https://plaza.rakuten.co.jp/kirialoverio/9000/
- 2007-08当時業界記事保存: https://p-mans.blogspot.com/2007/08/

取得日: 2026-09-01

## missingFields

- 2007年9月内の具体導入日
- 設定別機械割
- baseGamesPer50
- RT純増/G
- 設定変更/据え置き/電源OFF→ON時のRT状態・残G処理
- 本機固有の変更判別

## conflicts

- 設定別ボーナス合成は HAZUSEの `1/177.1→1/149.0` と旧保存資料の `1/177→1/148` に丸め差あり。実質整合と判断し、CONFLICT扱いにはしない。
- 現時点で主要性能値に平均処理が必要な明確な数値競合は確認せず。
