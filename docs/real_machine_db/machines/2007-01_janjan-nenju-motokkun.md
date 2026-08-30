# ジャンジャン年中猛特訓

machineName: ジャンジャン年中猛特訓
manufacturer: SNKプレイモア
releaseDate: 2007-01（2007年1月下旬納品予定）
generation: 5号機初期
systemType: ボーナス+RT / BB+2種CB

## payoutRateBySetting

資料間で掲載値が異なるため平均せずCONFLICTとして保持する。

### パチマガスロマガ PAYOUT（シミュレート値）

| 設定 | PAYOUT |
|---|---:|
| 1 | 96.88% |
| 2 | 98.60% |
| 3 | 100.18% |
| 4 | 102.62% |
| 5 | 105.63% |
| 6 | 107.59% |

### 5号機クロニクル掲載機械割

| 設定 | 機械割 |
|---|---:|
| 1 | 96.5% |
| 2 | 97.9% |
| 3 | 99.3% |
| 4 | 101.4% |
| 5 | 103.9% |
| 6 | 105.5% |

信頼度: CONFLICT

## initialHitBySetting

本機は赤7BIG・青7BIG・BAR CT・BAR/BAR/赤7 CTの4ボーナス構成。物差し用に個別確率と合算を保存する。

| 設定 | 赤7BIG | 青7BIG | BAR CT | BAR/BAR/赤7 CT | ボーナス合算 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/541.62 | 1/546.13 | 1/1074.36 | 1/1092.27 | 1/181.04 |
| 2 | 1/528.52 | 1/504.12 | 1/1057.03 | 1/1057.03 | 1/173.38 |
| 3 | 1/508.03 | 1/512.00 | 1/1008.25 | 1/1024.00 | 1/169.78 |
| 4 | 1/481.88 | 1/481.88 | 1/963.76 | 1/963.76 | 1/160.63 |
| 5 | 1/455.11 | 1/458.29 | 1/910.22 | 1/923.04 | 1/152.41 |
| 6 | 1/439.84 | 1/439.84 | 1/873.81 | 1/873.81 | 1/146.29 |

5号機クロニクルではBIG/REGにまとめた表もあるが、本機は4ボーナス構成のため上記の当時解析値を主データとする。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED。

「ジャンジャン年中猛特訓 1000円」「コイン持ち」「ベース」「50枚」等へ検索語を変え、当時解析・古いDB・回顧資料を再探索したが、比較可能な公表数値を確定できなかった。

## netIncrease

- RTは全ボーナス後に突入。
- 赤7BIG後・BAR CT後: 77G RT
- 青7BIG後・BAR/BAR/赤7 CT後: 33G RT
- RT終了条件: 規定ゲーム数消化またはボーナス成立
- 1Gあたり純増: UNVERIFIED

信頼度: INDUSTRY（RTゲーム数/終了条件）

## basicPayout

当時グリーンべるとおよびパチマガスロマガで整合。

- 赤7BIG: 規定払い出し350枚超、純増約235枚、終了後RT77G
- 青7BIG: 規定払い出し180枚超、純増約123枚、終了後RT33G
- BAR CT: 規定払い出し240枚超、純増約175枚、終了後RT77G
- BAR/BAR/赤7 CT: 規定払い出し150枚超、純増約112枚、終了後RT33G

信頼度: INDUSTRY

## modeSpecificMinimumData

- 型式名: モウトックン
- 5号機 / 5ライン / 3枚掛け専用
- SNKプレイモア発表展示会: 2006-12-14
- 納品: 2007年1月下旬予定

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: UNVERIFIED
- carryOverBehavior: UNVERIFIED
- powerCycleBehavior: UNVERIFIED
- gameCounterReset: 該当する天井ゲーム数なし。RT残存時の設定変更/電源断処理はUNVERIFIED
- ceilingAfterReset: 天井機能を確認できず、短縮天井の公開情報も未確認
- modeAfterReset: 朝一専用モード/モード再抽選の公開情報を確認できず
- stateAfterReset: RT等の内部状態が設定変更でどう処理されるか高信頼資料では未確認
- advantageousSectionReset: 非該当（5号機初期。有利区間制度導入前）
- resetBenefits: 公開された朝一恩恵を確認できず
- resetPenalties: 公開された設定変更時の主要不利要素を確認できず
- resetDetection: ガックン等の変更判別情報を高信頼資料で確認できず
- numericResetData: なし / UNVERIFIED

### resetBehavior 再探索メモ

以下の語へ変えて横断したが、当時解析または一次/業界資料で設定変更・据え置き・電源OFF→ON時のRT処理や朝一挙動を確定できなかった。

- 「ジャンジャン年中猛特訓 設定変更」
- 「ジャンジャン年中猛特訓 リセット」
- 「ジャンジャン年中猛特訓 朝一」
- 「ジャンジャン年中猛特訓 据え置き」
- 「ジャンジャン年中猛特訓 電源OFF ON RT」
- 「ジャンジャン年中猛特訓 ガックン」

バックアップエラー品について「設定変更でエラー解除」の中古実機情報は存在するが、ホール営業時の設定変更挙動とは定義が異なるためresetBehavior根拠には採用しない。

## sources

取得日: 2026-08-31

1. P-WORLD / グリーンべると — SNKプレイモア、新旧筐体の新作2機種を発表
   - https://news.p-world.co.jp/articles/1971/greenbelt
   - 2006-12-15掲載。4種ボーナスの平均獲得枚数、77G/33G RT、納品2007年1月下旬予定
   - reliability: INDUSTRY
2. パチマガスロマガ — ジャンジャン年中猛特訓 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/09/a.php
   - 4種ボーナスの規定払い出し/純増、全ボーナス後RT
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — ボーナス抽選確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/09/h.php
   - 設定別4ボーナス確率、合算、PAYOUTシミュレート値
   - reliability: ANALYSIS_HIGH
4. P-WORLD — ジャンジャン年中猛特訓
   - https://www.p-world.co.jp/machine/database/4528
   - 型式名、各ボーナス後RTゲーム数
   - reliability: ANALYSIS_SINGLE
5. 5号機クロニクル — SNKプレイモア5号機全機種一覧
   - https://5goki.com/snkplaymore
   - 2007/1導入、別定義/別資料系統の機械割・BIG/REGまとめ値
   - reliability: ANALYSIS_SINGLE
6. SNKプレイモア旧公式 — 広告宣伝用素材ページ
   - https://slot.snk-corp.co.jp/official/janjan-motokkun/download/kiyaku.html
   - 旧公式ページ現存確認
   - reliability: OFFICIAL

## missingFields

- baseGamesPer50
- RT純増/G
- resetBehaviorの設定変更/据え置き/電源断時の具体挙動

性能コアは主要比較値のうちベース・RT純増が未確定のためPARTIAL。resetBehaviorQAもPARTIALとして別管理する。

## conflicts

- 機械割/PAYOUT: パチマガスロマガのシミュレート値96.88〜107.59%と、5号機クロニクル掲載96.5〜105.5%が競合。定義/算出条件を同一視せず双方保持。
