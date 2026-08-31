# 剣豪！武蔵

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: 剣豪！武蔵
manufacturer: エレコ
generation: 5号機初期
releaseDate: 2006-03-27
systemType: ボーナス + RT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 98.25% |
| 6 | 105.32% |

パチマガスロマガのシミュレート値。2段階設定として解析されている資料を本線とする。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | BIG合成 | 斬チャンス | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/394.80 | 1/1310.72 | 1/303.41 |
| 6 | 1/337.81 | 1/1170.29 | 1/262.14 |

BIGはS-BIG/N-BIG各1/789.59→1/675.63。パチマガスロマガと当時機種整理記事でBIG値が一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

1000円あたり38.56P。

50枚相当の比較値として採用。

信頼度: ANALYSIS_HIGH

## netIncrease

RT「巌流島GAME」:
- 100G
- 約80枚増加（メーカー公式/P-WORLD）
- パチマガスロマガ: 約+0.6枚/G

信頼度: ANALYSIS_HIGH

## basicPayout

メーカー公式/P-WORLD:
- BIG（大）: 約300枚（465枚超払い出し終了）
- BIG（小）: 約250枚（385枚超払い出し終了）
- 斬チャンス: 約110枚（155枚超払い出し終了）

信頼度: OFFICIAL

## modeSpecificMinimumData

- BIG終了後に100G RT「巌流島GAME」
- RT100Gで約80枚増加見込みとの公式説明
- 小役とボーナスの同時抽選を採用
- 型式名: 斬3（P-WORLD）
- 通常時ゲーム数天井は確認されない
- 有利区間制度導入前

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 「剣豪！武蔵 / 剣豪武蔵 / 斬3 / エレコ」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 巌流島GAME / RT / ガックン」を組み替え、メーカー公式、P-WORLD、当時解析、古い機種DB、後年資料を再探索したが、本機固有の設定変更時RT処理を明記した高信頼資料は今回確認できずUNVERIFIED。

carryOverBehavior:
- 通常時ゲーム数天井はNONE_CONFIRMED / NOT_APPLICABLE相当。
- 前日「巌流島GAME」中の据え置き時残G・内部状態引継ぎはUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみで「巌流島GAME」残G・内部状態が維持/消滅するかはUNVERIFIED。
- 電源OFF→ONのみで朝一専用恩恵が発生する根拠はNONE_CONFIRMED。

gameCounterReset:
- 通常時ゲーム数天井はNONE_CONFIRMED / NOT_APPLICABLE相当。

ceilingAfterReset:
- NONE_CONFIRMED。

modeAfterReset:
- ゲーム数管理モード/朝一専用モードはNONE_CONFIRMED。

stateAfterReset:
- BIG後100G RT「巌流島GAME」は確認済み。
- 設定変更/据え置き/電源OFF→ON時のRT残G・内部状態処理は十分再探索後もUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更専用の短縮天井、専用モード、初当たり優遇はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、表示、RT挙動等による変更判別は十分再探索後もUNVERIFIED。

numericResetData:
- 設定変更時モード振り分け: NONE_CONFIRMED
- 短縮天井: NONE_CONFIRMED
- 朝一当選率/恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式 — 剣豪！武蔵
   - https://www.universal-777.com/product/slot/kengou_musashi/
   - ボーナス獲得枚数、100G RT「巌流島GAME」、同時抽選
   - reliability: OFFICIAL
2. パチマガスロマガ — 剣豪！武蔵
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/61/k.php
   - 設定1/6のBIG・斬チャンス・機械割
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 小役確率・通常時/RT中
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/61/c.php
   - 1000円あたり38.56P、RT約+0.6枚/G
   - reliability: ANALYSIS_HIGH
4. P-WORLD — 剣豪！武蔵
   - https://www.p-world.co.jp/machine/database/4151
   - 型式名、獲得枚数、RT100Gで約80枚増加
   - reliability: INDUSTRY
5. ALL7.jp — 2006年3月導入予定一覧
   - https://www.all7.jp/plans/index/2006/03
   - 導入予定2006-03-27
   - reliability: INDUSTRY

## missingFields

- 設定変更/据え置き/電源OFF→ON時の「巌流島GAME」残G・内部状態処理
- 本機固有の設定変更判別
- 設定構成が本当に1/6の2段階のみかは追加一次資料照合余地あり

## conflicts

重大な数値CONFLICTは現時点で確認していない。

## QA note

- 性能コアはCOMPLETE_COREを維持。
- v0.7 resetBehaviorを遡及追加。天井/朝一専用モード/有利区間は非該当またはNONE_CONFIRMED。RTの変更・据え置き・電断時処理と変更判別のみ十分再探索後もUNVERIFIED。
