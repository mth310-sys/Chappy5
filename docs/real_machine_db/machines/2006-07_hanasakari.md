# 花盛

machineName: 花盛
manufacturer: SNKプレイモア
releaseDate: 2006-07
generation: 5号機初期
systemType: ボーナス主体 / 2種BIG + チャレンジボーナス
coreStatus: PARTIAL
qaResetBehavior: PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.7% |
| 2 | 97.5% |
| 3 | 99.2% |
| 4 | 101.0% |
| 5 | 102.7% |
| 6 | 104.4% |

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

| 設定 | BIG① | BIG② | REG/CB | 合成 |
|---|---:|---:|---:|---:|
| 1 | 1/799.2 | 1/799.2 | 1/595.8 | 1/239.2 |
| 2 | 1/753.3 | 1/753.3 | 1/565.0 | 1/226.0 |
| 3 | 1/712.4 | 1/712.4 | 1/537.2 | 1/214.2 |
| 4 | 1/675.6 | 1/675.6 | 1/512.0 | 1/203.5 |
| 5 | 1/642.5 | 1/642.5 | 1/489.1 | 1/193.9 |
| 6 | 1/612.5 | 1/612.5 | 1/468.1 | 1/185.1 |

信頼度: ANALYSIS_SINGLE

## baseGamesPer50

UNVERIFIED

## netIncrease

該当なし/通常のボーナス主体として整理。詳細RT等は今回確認できず。

## basicPayout

基本獲得枚数: UNVERIFIED

## modeSpecificMinimumData

- 2種類のBIGボーナスと技術介入要素を持つチャレンジボーナスの計3種を搭載するとの後年資料を確認。
- 設定別確率表ではBIG2系統 + REG/CB 1系統として扱われる。
- 5号機クロニクル、SNKプレイモア機種年表系資料で2006年7月導入を確認。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `花盛 / SNKプレイモア / 花咲か爺さん` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / モード / 状態` を組み替え、パチマガスロマガ現存攻略ページ、5号機クロニクル、旧機種年表、実機販売資料、検索残存資料・回顧資料を再探索。
- 設定変更時の本機固有のボーナス成立状態・内部状態処理を直接説明する資料は確認できず `UNVERIFIED`。

carryOverBehavior:
- 据え置き時に引き継ぐべき通常時ゲーム数天井・RT/ART/CZモードの本機固有資料は確認できず。
- 本機は公開資料上ボーナス主体機として整理され、通常時天井やゲーム数モードの存在は確認できないため、天井G数/モード引継ぎは `NONE_CONFIRMED`。
- その他の内部ボーナス成立状態等の据え置き挙動は `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみの場合の本機固有内部状態・表示/出目挙動は `UNVERIFIED`。

gameCounterReset:
- 通常時ゲーム数天井の本機固有公開値は確認できず、天井カウンタのリセット/引継ぎは `NONE_CONFIRMED`。

ceilingAfterReset:
- 設定変更時の短縮天井・朝一天井は `NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用モード、ゲーム数モード、設定変更専用モードは `NONE_CONFIRMED`。

stateAfterReset:
- RT/ART/CZ等の状態移行を設定変更時にどう扱うかを示す本機固有資料は確認できず。
- 公開資料上はボーナス主体として扱われるため、朝一専用高確等は `NONE_CONFIRMED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更時の天井短縮、専用モード、確定ボーナス、高確移行等の主要恩恵は `NONE_CONFIRMED`。

resetPenalties:
- 設定変更固有の主要不利要素は `NONE_CONFIRMED`。

resetDetection:
- 本機固有のリールガックン、出目、ランプ/表示等による設定変更・据え置き判別は、検索語・資料系統変更後も `UNVERIFIED`。
- SNKプレイモア他機種の朝一挙動は花盛へ流用しない。

numericResetData:
- 設定変更時モード振り分け、朝一特定G以内当選率、短縮天井G数、リセット恩恵発生率などの公開朝一数値は `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. 5号機クロニクル — SNKプレイモア全機種一覧
   - https://5goki.com/snkplaymore
   - 導入時期2006/7、設定別2種BIG・REG/CB・合成、機械割
   - reliability: ANALYSIS_SINGLE
2. パチマガスロマガ — 花盛
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/05/d.php
   - 通常時の打ち方、2種BIG/CBのボーナス構成確認補助
   - reliability: ANALYSIS_HIGH
3. Home-Slot — SNKプレイモア 花盛 中古実機説明
   - https://home-slot.net/SHOP/s-snk10.html
   - 2種類のBIGと技術介入要素を盛り込んだチャレンジボーナスの計3種類という構成説明
   - reliability: ANALYSIS_SINGLE
4. SNKプレイモア機種年表系資料
   - https://wikippe.e-do-match.com/index.php/SNK%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A2%E3%82%A2
   - 花盛 2006年7月
   - reliability: RETROSPECTIVE_SUPPORT

## missingFields

- 50枚あたりゲーム数
- BIG/CBの基本獲得枚数
- ボーナス終了条件
- 設定変更時の本機固有内部状態処理
- 据え置き時/電源OFF→ON時の本機固有挙動
- 本機固有のガックン/設定変更判別
- 設定変更時の公開朝一数値

## conflicts

- 5号機クロニクルの表見出しは「BIG / BIG / REG」となっている一方、実機販売資料では第3ボーナスを「チャレンジボーナス」と説明している。本DBでは数値表を原文どおり保持しつつ、方式欄ではCB表記を併記する。

## qaNotes

- 既存性能コア `PARTIAL` は変更していない。
- 今回はv0.7 resetBehaviorの遡及QAのみを追加。
- リセット情報欠損を「影響なし」と推定せず、本機固有資料で確認できた範囲だけ `NONE_CONFIRMED / UNVERIFIED` を分離して記録した。
