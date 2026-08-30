# サンダーVスペシャル

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: サンダーVスペシャル
formalModelName: サンダーVスペシャルDX2
manufacturer: エレコ（販売: アルゼ）
releaseDate: 2006-11-27
generation: 5号機初期
systemType: ボーナス主体 + 天井RT / 3段階設定（1・4・6）

## 性能コア

payoutRateBySetting:
- 設定1: 98.9%（pacnk） / 98.9%（K-Navi）
- 設定4: 102.1%（pacnk） / 102.1%（K-Navi）
- 設定6: 107.1%（pacnk） / 107.2%（K-Navi）
- 注: 後年資料には設定1 98.38%、設定4 101.37%、設定6 106.06% および 98.8/101.9/106.7% の別値も存在。平均せずCONFLICTとして保持。

initialHitBySetting:
- BIG
  - 設定1: 1/297.90（K-Navi丸め1/298）
  - 設定4: 1/287.40（K-Navi丸め1/288）
  - 設定6: 1/270.80（K-Navi丸め1/271）
- CT/ミドルボーナス（黄V）
  - 設定1: 1/910.20（K-Navi丸め1/910）
  - 設定4: 1/780.20（K-Naviは1/783で差あり）
  - 設定6: 1/655.40（K-Naviは1/660で差あり）
- ボーナス合算（K-Navi）
  - 設定1: 1/224
  - 設定4: 1/210
  - 設定6: 1/192

baseGamesPer50: UNVERIFIED
netIncrease:
- 天井RT: 約0.4枚/G
basicPayout:
- BIG: 最大純増約336枚（345枚超払い出しで終了）
- CT/ミドルボーナス: 最大純増約238枚（253枚超払い出しで終了）

modeSpecificMinimumData:
- ボーナス間1000G到達で天井RTへ移行し、次回ボーナス成立まで継続。
- 天井RT純増は約0.4枚/G。

## resetBehavior

settingChangeBehavior:
- 設定変更を行っても、天井判定に使うボーナス間ハマリゲーム数はリセットされず引き継がれるとの解析情報あり。

carryOverBehavior:
- 据え置き時はボーナス間ハマリゲーム数を引き継ぐ。宵越し天井狙いが可能とされる。

powerCycleBehavior:
- 電源OFF→ONのみの固有挙動は、検索語・資料系統を変更して探索したが今回高信頼資料で確定できずUNVERIFIED。

gameCounterReset:
- 設定変更時も天井用内部ハマリゲーム数を引き継ぐ。
- ホール表示器側のデータカウンタ表示リセットとは別概念のため混同しない。

ceilingAfterReset:
- 天井短縮なし。設定変更後も前日からのボーナス間ゲーム数を引き継ぎ、累計1000Gで天井RTへ到達する解析情報。

modeAfterReset:
- 通常時モードを持つ機種としての公開されたリセット専用モード情報は今回確認できず。該当なし/UNVERIFIED。

stateAfterReset:
- 天井ゲーム数引継ぎ以外の内部状態再抽選・引継ぎに関する比較可能な公開情報は今回確認できずUNVERIFIED。

advantageousSectionReset:
- 非該当（有利区間制度導入前の5号機初期）。

resetBenefits:
- 設定変更で天井ゲーム数が消えないため、前日ハマリ台では宵越し天井狙いが成立しうる。

resetPenalties:
- 公開された設定変更固有の主要不利要素は今回確認できずUNVERIFIED。

resetDetection:
- ガックン等の設定変更判別について、機種固有の高信頼情報は今回確認できずUNVERIFIED。

numericResetData:
- 天井: ボーナス間1000G
- 設定変更後: 前日ハマリゲーム数引継ぎ
- 天井RT純増: 約0.4枚/G

## 出典

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式「サンダーVスペシャル」
   - https://www.universal-777.com/product/slot/thunder_v_sp/
   - 信頼度: OFFICIAL
   - 機種・メーカー系列・ゲーム性の公式確認。

2. pacnk「サンダーVスペシャル 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_savsp.html
   - 信頼度: ANALYSIS_HIGH
   - 設定別BIG/CT、PAYOUT、天井1000G、天井RT約0.4枚/G、設定変更時もハマリG数引継ぎを確認。

3. K-Navi「サンダーVスペシャル」
   - https://p-kn.com/slot/685/
   - 信頼度: ANALYSIS_HIGH
   - 設定別BIG/REG（CT表記）、合算、機械割を別系統照合。

4. パチ7「サンダーVの歴史を振り返る」
   - https://pachiseven.jp/articles/detail/10861
   - 信頼度: ANALYSIS_HIGH
   - 2006年11月、BIG最大336枚、MB最大238枚、ボーナス間1000G救済RTを確認。

5. みんスロ「サンダーVスペシャル」
   - https://minslo.com/%E3%82%B5%E3%83%B3%E3%83%80%E3%83%BCv%E3%82%B9%E3%83%9A%E3%82%B7%E3%83%A3%E3%83%AB/
   - 信頼度: ANALYSIS_SINGLE
   - 導入日2006-11-27、天井/RT、別系統の機械割値を確認。

6. 後年個人データ整理「データ集〈サンダーVスペシャル〉」
   - https://ameblo.jp/thundervsp5/entry-12948934113.html
   - 信頼度: ANALYSIS_SINGLE
   - 設定別確率・機械割の別値。競合検出用途。

7. 後年個人解析「リーチ目集〈サンダーVスペシャル〉」
   - https://ameblo.jp/thundervsp5/entry-12948934275.html
   - 信頼度: ANALYSIS_SINGLE
   - 天井1001G表記、設定変更後もハマリG引継ぎを補助照合。1000G/1001Gは到達/発動ゲームの表現差の可能性があるため数値定義を混同しない。

## missingFields

- baseGamesPer50
- powerCycleBehavior（設定変更を伴わない電源OFF→ONのみ）
- stateAfterResetの天井以外の固有挙動
- resetDetection（ガックン等の機種固有確証）

## conflicts

- 機械割は資料系統により差あり。pacnk/K-Naviの98.9/102.1/107.1〜107.2%を主要値として保持するが、98.38/101.37/106.06%および98.8/101.9/106.7%も存在するため平均化しない。
- CT確率は設定4・6でpacnk（1/780.20, 1/655.40）とK-Navi（1/783, 1/660）に丸めを超える小差があるため原値を保持。
- 天井表現は「1000Gで発動」と「1001Gで突入」が併存。ゲーム数到達と次ゲーム突入の表記差とみられるが、推測で統一せず両表現を出典付きで保持する。
