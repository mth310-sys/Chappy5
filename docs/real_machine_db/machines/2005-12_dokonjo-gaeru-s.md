# ど根性ガエルS

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: ど根性ガエルS
manufacturer: ロデオ
releaseDate: CONFLICT: 2005-12 / 2006-01
generation: 5号機初期
systemType: A+RT / 2種BIG + REG / ボーナス後CZ的区間→無限RT

## payoutRateBySetting

UNVERIFIED

検索語・資料系統を変えて再探索したが、設定別機械割表を高信頼で取得できず。

## initialHitBySetting

UNVERIFIED

パチマガスロマガに「ボーナス確率・PAYOUT」項目が現存することは確認できるが、検索経由で設定別表本文を取得できず。推測転記しない。

## baseGamesPer50

UNVERIFIED

検索語「50枚」「1000円」「ベース」等で再探索したが、比較可能な数値を取得できず。

## netIncrease

- 無限RT: 250Gで約200枚増加見込みとの業界発表記事。単純換算で約0.8枚/G相当だが、DBには記事記載値そのものを採用し、換算値は参考扱い。

信頼度: INDUSTRY

## basicPayout

- スーパーBIG: 約300枚純増（451枚以上の払い出しで終了）
- ノーマルBIG: 約200枚純増（301枚以上の払い出しで終了）
- REG: パチマガスロマガでは約12枚純増、2回のJAC入賞で終了

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- ロデオ5号機第1弾。
- SBB後は「ど根性タイム」30G。
- REG後にも「ど根性タイム」。業界発表記事は20G、パチマガスロマガ解析は18Pとし差異あり。
- NBB後のど根性タイムはパチマガスロマガ解析で2P。
- ど根性タイム中に特殊リプレイ成立で次回ボーナスまで継続する無限RTへ。
- パチマガスロマガ解析のRT突入期待度: SBB後 約42.83〜53.05%、REG後 約31.25〜34.54%、NBB後 約0.02%。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 「ど根性ガエルS / ド根性ガエルS / ロデオ / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / ど根性タイム / ガックン / 天井」を組み合わせ、当時業界記事・P-WORLD・パチマガスロマガ・後年回顧資料を横断。
- 設定変更時に、ど根性タイム/無限RTの内部状態・残りゲーム数をどう処理するか明記した高信頼資料は確認できずUNVERIFIED。

carryOverBehavior:
- 本機はボーナス後の有限DTから特殊リプレイ成立で次回ボーナスまで継続する無限RTへ入る仕様を複数資料で確認。
- 据え置き時にDT/無限RT内部状態・残りゲーム数をそのまま引き継ぐかは本機固有資料で確定できずUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみの場合のDT/無限RT状態・残りゲーム数の扱いはUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井は確認できないため、通常時天井ゲーム数のリセット/引継ぎはNOT_APPLICABLE相当。
- DT/RT残りゲーム数については設定変更・電断時処理がUNVERIFIED。

ceilingAfterReset:
- 通常時ゲーム数天井および設定変更後の短縮天井はNONE_CONFIRMED。

modeAfterReset:
- 通常時のゲーム数モード/朝一専用モードはNONE_CONFIRMED。
- ボーナス後DT種別は直前ボーナス種別で決まる公開仕様だが、朝一設定変更時に特別なDTへ移行する根拠は確認できない。

stateAfterReset:
- DT/無限RTというRT関連状態が存在するためRESET_SENSITIVE候補。
- 設定変更/据え置き/電断時に当該状態を再抽選・初期化・引継ぎするかはUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- NONE_CONFIRMED。設定変更専用の天井短縮・朝一RT・優遇モードなどは確認できない。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- UNVERIFIED。ガックン・表示・RT開始状態等を利用した本機固有の設定変更判別を高信頼資料で確認できない。

numericResetData:
- 設定変更時DT/RT残りゲーム数処理: UNVERIFIED
- 据え置き時DT/RT残りゲーム数処理: UNVERIFIED
- 電源OFF→ON時DT/RT残りゲーム数処理: UNVERIFIED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると — ロデオ5号機第1弾は『ど根性ガエルS』
   - https://web-greenbelt.jp/00005254/
   - 2005-10-21発表、ロデオ5号機第1弾、SBB約300枚/NBB約200枚、SBB後30G・RB後20Gのど根性タイム、無限RTは250Gで約200枚増加見込み。
   - reliability: INDUSTRY
2. パチマガスロマガ — ど根性ガエルS 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/37/a.php
   - 5号機/5ライン/3枚掛け、2種BIG+REG、SBB約300枚/NBB約200枚/REG約12枚。ボーナス後DTから特殊リプレイで次回ボーナスまでのRTへ移行。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — ど根性タイム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/37/i.php
   - SBB後30P、NBB後2P、REG後18P、特殊リプレイ確率とRT突入期待度。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 同時成立期待度
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/37/h.php
   - チェリー/スイカ成立時の設定別ボーナス同時成立期待度。
   - reliability: ANALYSIS_HIGH
5. 娯楽の学校 — パチスロ5号機 2005-2006全機種リスト
   - https://goraku-gakkou.com/5gouki-2005-2006/
   - ど根性ガエルSを2006年1月導入として掲載。
   - reliability: ANALYSIS_SINGLE
6. スロリスクタイム — 2005年代に発売されたパチスロ一覧
   - https://pachisuro100.com/2005slot/
   - ど根性ガエルSを2005/12として掲載。
   - reliability: ANALYSIS_SINGLE
7. P-WORLD — ど根性ガエルS
   - https://www.p-world.co.jp/machine/database/3998
   - 機種存在・ロデオ機、実戦掲示板で無限RT実働例を補助確認。
   - reliability: ANALYSIS_SINGLE
8. パチマガスロマガFREE — 5号機RT史の回顧記事
   - https://pachimaga.com/free/special/9b7dc25acf9a50124c00533dbbd837d5740cb9d7.php
   - 有限ゲーム数のRT的CZから特殊リプレイで無限RTへ格上げする仕組みを後年資料で再確認。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定別機械割
- 設定別SBB/NBB/REG確率または合算
- 50枚あたりゲーム数
- ホール導入月の確定一次資料
- 設定変更/据え置き/電源OFF→ON時のDT・無限RT状態/残りゲーム数処理
- 本機固有の設定変更判別

## conflicts

- 導入月: 2005-12と2006-01の二次資料差があるためCONFLICT。2005年10月21日に業界発表された事実は確認済みだが、発表日を導入日として扱わない。
- REG後ど根性タイム: グリーンべると発表記事は20G、パチマガスロマガ解析は18P。定義/実装差の可能性があるためCONFLICTとして保持。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
