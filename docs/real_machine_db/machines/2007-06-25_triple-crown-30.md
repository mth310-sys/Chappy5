# トリプルクラウン-30

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: トリプルクラウン-30
aliases:
- トリプルクラウン30
- Triple Crown-30
manufacturer: 清龍ゲームジャパン
releaseDate: 2007-06-25（ALL7.jp導入予定を時系列本線。P-WORLDは導入開始2007年05月、後年資料は2007.06表記のため日付定義差をCONFLICT保持）
generation: 5号機初期
systemType: ノーマル / 完全告知 / 30Φ沖スロ

## 性能コア

payoutRateBySetting:
- 清龍ゲームジャパン由来として後年整理・P-WORLDに掲載: 設定1 96.47% / 設定2 98.72% / 設定3 100.99% / 設定4 103.22% / 設定5 105.47% / 設定6 107.72%
- パチマガスロマガ PAYOUT（シミュレート値）: 設定1 96.95% / 設定2 99.06% / 設定3 101.20% / 設定4 103.30% / 設定5 105.43% / 設定6 107.52%

confidence: CONFLICT

note:
- メーカー由来として引用された96.47〜107.72%はP-WORLD、後年の清龍ゲームジャパン整理、2012年のグリーンべると「初代の出玉性能を完全継承」記事で整合。
- パチマガスロマガは明示的にシミュレート値のため定義が異なる可能性があり、平均せず双方を保持する。

initialHitBySetting:
- BIG: 設定1 1/327.68 / 設定2 1/312.08 / 設定3 1/297.89 / 設定4 1/284.94 / 設定5 1/273.07 / 設定6 1/262.14
- BG / REG: 設定1 1/546.13 / 設定2 1/504.12 / 設定3 1/468.11 / 設定4 1/436.91 / 設定5 1/409.60 / 設定6 1/385.51
- ボーナス合算: 設定1 1/204.80 / 設定2 1/192.75 / 設定3 1/182.04 / 設定4 1/172.46 / 設定5 1/163.84 / 設定6 1/156.04

confidence: CONFLICT

note:
- 上記精密値はP-WORLD、パチマガスロマガ、後年のメーカー由来整理で一致し、2012年グリーンべるとの「初代性能完全継承」記事でも設定1/6のBIG・REGを再確認できるため本線値とする。
- K-NaviにはBIG 1/312.0〜1/247.3、BAR 1/504.1〜1/354.2という別値が掲載されており、同名別スペックまたはデータ差を断定できないためCONFLICTとして残す。平均しない。

baseGamesPer50:
- 40.52G / 1000円（50枚）

confidence: ANALYSIS_HIGH

note:
- パチマガスロマガ通常時小役ページで直接掲載。後年のトリプルクラウン解説でも同値を確認。

netIncrease:
- NOT_APPLICABLE（ボーナスのみで出玉を増やすノーマルタイプ。RT/ART非搭載）

basicPayout:
- BIG: 規定払い出し345枚超で終了 / 純増約312枚
- BG / REG: 規定払い出し105枚超で終了 / 純増約104枚

confidence: ANALYSIS_HIGH

note:
- パチマガスロマガとP-WORLDで整合。

modeSpecificMinimumData:
- 30Φ仕様の完全告知ノーマル。
- リール右側のバット型CHANCEランプ点灯/点滅でボーナス告知。
- 高速点滅はBIG確定とP-WORLDに記載。
- AT/ART/RT/CZ、ゲーム数管理モード、通常時天井は確認されない。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 本機は通常時ゲーム数天井・AT/ART/RT/CZ・ゲーム数管理モードを持たないノーマル機として確認できるため、設定変更専用の天井短縮・モード再抽選・朝一AT/CZ恩恵はNOT_APPLICABLE / NONE_CONFIRMED。
- 設定変更時の成立済みボーナス、リール初動等を含む本機固有の内部処理は、機種名表記揺れ・型式名・メーカー名と「設定変更/リセット/朝一」を組み替えて再探索したがUNVERIFIED。

carryOverBehavior:
- 通常時天井ゲーム数・モード・RT/ART状態の据え置き引継ぎはNOT_APPLICABLE。
- 本機固有の据え置き判別挙動はUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみで変化するゲーム数天井・モード・RT/ART状態はNOT_APPLICABLE。
- 成立済みボーナスやリール挙動など電断固有処理は公開資料で確定できずUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井なし。NOT_APPLICABLE。

ceilingAfterReset:
- 天井なし。NOT_APPLICABLE。

modeAfterReset:
- 通常時ゲーム数管理モード/朝一専用モードはNONE_CONFIRMED / NOT_APPLICABLE。

stateAfterReset:
- RT/ART/CZ等の状態管理はNOT_APPLICABLE。
- ボーナス成立状態等の設定変更時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更専用の短縮天井、朝一モード、初当たり/CZ優遇、公開朝一恩恵数値はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要な不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、表示、ゲーム数挙動による設定変更/据え置き判別は、「トリプルクラウン30 / トリプルクラウン-30 / 清龍ゲームジャパン」と「ガックン/設定変更/朝一/据え置き」を組み替えて再探索後もUNVERIFIED。

numericResetData:
- 短縮天井: NOT_APPLICABLE
- 設定変更時モード振り分け/朝一当選率/リセット恩恵発生率: 比較可能な公開数値は今回未確認

## sources

取得日: 2026-08-31

1. ALL7.jp — 2007年6月新台導入予定一覧
   - https://www.all7.jp/plans/index/2007/06
   - トリプルクラウン-30、清龍ゲームジャパン、導入予定2007-06-25。
   - reliability: INDUSTRY_DB
2. P-WORLD — トリプルクラウン30
   - https://www.p-world.co.jp/machine/database/4719
   - 5号機ノーマル/完全告知/沖スロ、型式名トリプルクラウン-30、検定番号7S0038、導入開始2007年05月、BIG約312枚/REG約104枚、設定別BIG/REG/合算、機械割96.5〜107.7%。
   - reliability: INDUSTRY_DB
3. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/02/a.php
   - ノーマル/完全告知、BIG345枚超（約312枚純増）、BG105枚超（約104枚純増）。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ボーナス抽選確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/02/h.php
   - 設定別BIG/BG/合算精密値、PAYOUTシミュレート96.95〜107.52%。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 小役出現確率・通常時
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/02/c.php
   - 1000円あたり40.52G。
   - reliability: ANALYSIS_HIGH
6. グリーンべると — 原点回帰！初代のスペックでトリクラ復活（2012-04-04）
   - https://web-greenbelt.jp/00001447/
   - 2012年ZERO-30が「初代トリプルクラウン-30の出玉性能を完全継承」と明記。初代由来BIG 1/327.68〜1/262.14、REG 1/546.13〜1/385.51、出玉率96.47〜107.72%を再確認。
   - reliability: INDUSTRY
7. 清龍ゲームジャパン5号機整理（5号機クロニクル）
   - https://5goki.com/seiryu
   - 2007年導入機、機械割96.5〜107.7%。後継S2/ニュートリプルクラウン等と独立掲載。
   - reliability: ANALYSIS_SINGLE
8. 後年メーカー由来スペック整理
   - https://pachinko.hatenablog.jp/entry/2007/06/tripleCrown-30
   - © SEIRYU GAME JAPAN表記、設定別機械割96.47〜107.72%、BIG/BG/合算精密値、2007.06。
   - reliability: ANALYSIS_SINGLE
9. K-Navi — トリプルクラウン-30
   - https://p-kn.com/slot/642/
   - BIG 1/312.0〜1/247.3、BAR 1/504.1〜1/354.2等、他資料と異なる設定別値を掲載。競合根拠として保持。
   - reliability: ANALYSIS_SINGLE
10. 清龍ゲームジャパン検定通過整理
   - https://q-and-a.hatenablog.com/entry/2016/10/21/095330
   - 2007-05-10に「トリプルクラウン-30」検定通過記録。後継トリプルクラウンS2-30は2007-08-06で別型式。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更時の成立済みボーナス等の内部処理
- 据え置き/電源OFF→ONのみでの本機固有挙動
- 本機固有のガックン/変更判別
- 公開朝一専用数値

## conflicts

- 導入時期: P-WORLDは導入開始2007年05月、後年整理は2007.06、ALL7.jpは具体的な導入予定2007-06-25。時系列本線は具体日を持つALL7.jpを採用し、他表記も保持。
- 機械割: メーカー由来として後年整理/P-WORLDで96.47〜107.72%（丸め96.5〜107.7%）に対し、パチマガスロマガのPAYOUTシミュレートは96.95〜107.52%。平均しない。
- 設定別ボーナス確率: P-WORLD/パチマガスロマガ/メーカー由来整理はBIG 1/327.68〜1/262.14、BG 1/546.13〜1/385.51で一致。一方K-NaviはBIG 1/312.0〜1/247.3、BAR 1/504.1〜1/354.2を掲載。平均せず双方を保持し、本線値は複数資料一致側とする。
