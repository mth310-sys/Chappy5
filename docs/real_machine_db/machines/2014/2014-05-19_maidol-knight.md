# メイドルナイト

machineName: メイドルナイト
formalModelName: メイドルナイト
inspectionNumber: 3S1208
manufacturer: JIN
releaseDate: 2014-05-19
releaseDatePrecision: exact_nationwide_start
generation: 5号機
systemType: AT / 疑似ボーナス+CZ / ゲーム数管理
recordStatus: PARTIAL_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- K-Navi 2014年5月全国一斉導入カレンダーで **2014-05-19** 導入開始を確認。
- JIN公式サイトの更新履歴では **2014-04-21 カタログ・素材掲載 / 2014-05-10 発売** と記録。メーカー発売日と全国一斉ホール導入日を分離し、本DBのreleaseDateは後者の2014-05-19を採用。
- P-WORLDで型式名 **メイドルナイト**、検定番号 **3S1208**、メーカーJIN、5号機ATを確認。
- 「幕末メイドルナイト」「メイドル騎士」は同機を指す表記として検索に使用。
- confidence: OFFICIAL_RELEASE_HISTORY + ANALYSIS_HIGH_EXACT_DATE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.5% |
| 3 | 101.4% |
| 4 | 106.5% |
| 5 | 111.3% |
| 6 | 116.8% |

- P-WORLDと5号機クロニクルで完全一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/347.7 |
| 2 | 1/335.5 |
| 3 | 1/311.9 |
| 4 | 1/282.4 |
| 5 | 1/253.7 |
| 6 | 1/218.8 |

- P-WORLD公開値。
- confidence: ANALYSIS_SINGLE_HIGH

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「メイドルナイト / 幕末メイドルナイト / メイドル騎士 / 3S1208 / JIN」に「50枚 / 1000円 / ベース / コイン持ち / 千円G / 回転数」を組み合わせ、P-WORLD、JIN公式、K-Navi系検索、パチ＆スロ必勝本、天井DB、当時試打記事、後年5号機DBを横断したが、比較可能な直接値を安全に固定できなかった。
- confidence: UNVERIFIED

## netIncrease

- AT「海援TIME」・疑似BIGとも **約2.9枚/G**。
- P-WORLDと2014年当時ホール試打記事で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「海援TIME」: **1セット30G+α**、約2.9枚/G、ゲーム数上乗せ+継続抽選型。
- 疑似BIG: **30〜300G**、約2.9枚/G。BIG突入時点で海援TIME確定。
- CZ「懲罰チャレンジ」: **10G / 20G / AT当選まで**のいずれか。
- 「討幕決戦」: 平均約22G継続、平均上乗せ約150G。
- 「超討幕決戦」: 平均約22G継続、平均上乗せ約170G、BIG平均6.1個ストック。
- confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は規定ゲーム数によるAT解除とCZ「懲罰チャレンジ」を持つ。
- 前兆ステージは「江戸前モード」。通常AT終了後は(超)天国モードの可能性があり、パチ＆スロ必勝本では **128G以内解除期待度（CZ解除含む）**を設定1〜6で40.63 / 41.76 / 47.16 / 50.01 / 55.99 / 60.98%と掲載。
- これは **通常AT終了後の値**であり、設定変更専用朝一数値ではないためresetBehaviorのpublicMorningNumbersへ流用しない。

## ceiling

- AT間最大 **1280G** でAT当選。
- P-WORLDでは天井到達時 **AT「海援TIME」+BIG+(超)討幕決戦**確定と掲載。
- 天井DBでもAT間最大1280Gで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_AFTER_MULTI_FAMILY_RESEARCH
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機固有の設定変更時RAM処理、天井Gリセット/引継ぎを直接明記した高信頼な現存資料は、検索語・資料系統を変えて再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な同時期AT機の挙動から推定しない。

### carryOverBehavior

- 据え置き時にAT間天井G、規定ゲーム数モード、CZ関連状態を引き継ぐかを直接比較した本機固有資料は **UNVERIFIED_AFTER_RESEARCH**。
- 「天井狙い650G」等の通常攻略値だけから宵越し可否を推定しない。

### powerCycleBehavior

- 設定変更を伴わない純粋な電源OFF→ON時の天井G・モード・内部状態契約は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常最大天井はAT間1280G。
- 設定変更専用の短縮天井、短縮規定G、リセット専用天井振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時に通常1280G進捗自体がクリアされるかも直接契約未確認のため、短縮なしと断定しない。

### modeAfterReset

- 通常時に(超)天国を含むゲーム数モードが存在することは確認できるが、**設定変更時のモード再抽選/引継ぎ、および設定変更専用振り分け**は **UNVERIFIED_AFTER_RESEARCH**。
- AT終了後128G以内解除期待度はリセット専用値ではないため転記しない。

### stateAfterReset

- CZ高確等を含む設定変更時・据え置き時・純電源再投入時の内部状態契約は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更専用の天井短縮、天国優遇、CZ優遇、初当たり優遇などは十分再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更で前日天井進捗を失うか自体が未確認のため、天井進捗消失を確定的不利要素として記録しない。
- その他設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のリールガックン、朝一出目、液晶ステージ、前兆位置等による設定変更/据え置き判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常AT終了後の128Gゾーン挙動を朝一変更判別へ流用しない。

### numericResetData

- **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**。
- 必勝本の128G以内解除期待度40.63〜60.98%は **AT終了後**の値であり、設定変更後朝一の公開数値ではない。

## resetBehavior 再探索メモ

「メイドルナイト / 幕末メイドルナイト / メイドル騎士 / 3S1208 / JIN」に「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1280G / 天井短縮 / モード / 天国 / ガックン / 状態 / CZ」を組み合わせ、JIN公式、P-WORLD、K-Navi導入カレンダー、パチ＆スロ必勝本、man-soft天井DB、当時ホール試打記事、5号機クロニクル、当時/後年回顧資料まで横断。通常性能・天井・AT終了後128G値は固定できたが、設定変更/据え置き/純電源OFF→ONを直接比較する本機固有契約は固定できなかったため、推測せずUNVERIFIEDを維持する。

## conflicts / safeguards

- JIN公式の **2014-05-10発売** とK-Naviの **2014-05-19全国一斉導入開始**は定義が異なるためCONFLICTではなく発売日/ホール導入日として分離。
- AT終了後128G以内解除期待度を「朝一128G解除率」と誤読しない。
- 同社2012年「夜勤病棟壱」や他社のメイド系機種のリセット仕様を混入しない。
- P-WORLDの天井恩恵表現「(超)討幕決戦」は、通常天井性能として保存し、リセット専用恩恵とはしない。

## sources

取得日: **2026-09-07**

1. JIN公式 — 製品情報/更新履歴（2014-04-21カタログ掲載、2014-05-10発売）
   - https://www.jin-777.co.jp/index.html
2. K-Navi — 2014年5月全国一斉導入カレンダー（2014-05-19 メイドルナイト/JIN）
   - https://p-kn.com/calendar/201405/
3. P-WORLD — メイドルナイト（型式/検定番号/AT初当たり/機械割/純増/AT・BIG・CZ/天井）
   - https://www.p-world.co.jp/machine/database/7390
4. 5号機クロニクル — その他メーカー5号機一覧（メイドルナイト機械割）
   - https://5goki.com/others
5. パチ＆スロ必勝本 — メイドルナイト ヤメ時について（AT後128G以内解除期待度）
   - https://p.hisshobon.jp/machine/2399/1/46387
6. man-soft 天井一覧 — メイドルナイト（導入2014-05-19 / AT間最大1280G）
   - https://smaslo.man-soft.com/slot-tenzyou-itiran/
7. コンサートホール成増 当時試打記事 — メイドルナイト（AT機/疑似ボーナス/純増2.9枚/G）
   - https://ameblo.jp/concerthall-narimasu/entry-11848484044.html

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior direct contract: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior direct contract: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

## confidence summary

- identity/date: HIGH
- payout: HIGH_MULTI_SOURCE
- AT initial hit: ANALYSIS_SINGLE_HIGH
- base: UNVERIFIED
- net increase/basic AT/ceiling: HIGH
- resetBehavior: PARTIAL_AFTER_MULTI_FAMILY_RESEARCH