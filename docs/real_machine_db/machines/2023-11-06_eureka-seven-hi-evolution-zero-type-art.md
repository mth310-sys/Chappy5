# パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART

recordNo: 1599
machineName: パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART
manufacturer: タイヨーエレック製造 / サミー販売
formalModel: S エウレカセブンHIEVO XS
inspectionCode: 330002
releaseDate: 2023-11-06
generation: 6.5号機 / メダル機
systemType: A+ART / リアルボーナス + セットストック型ART
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
### 市場想定 / 通常攻略
- 設定1: 98.1%
- 設定2: 99.0%
- 設定3: 100.3%
- 設定4: 103.6%
- 設定5: 104.8%
- 設定6: 106.4%

### 完全攻略時
- 設定1: 99.4%
- 設定2: 100.4%
- 設定3: 101.8%
- 設定4: 105.2%
- 設定5: 106.6%
- 設定6: 108.5%
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス合算
- 設定1: 1/195.6
- 設定2: 1/192.8
- 設定3: 1/190.5
- 設定4: 1/186.7
- 設定5: 1/185.7
- 設定6: 1/183.1

### ART初当り
- 設定1: 1/270.4
- 設定2: 1/255.7
- 設定3: 1/239.3
- 設定4: 1/210.7
- 設定5: 1/201.2
- 設定6: 1/188.7

### ボーナス+ART初当り合算
- 設定1: 1/159.7
- 設定2: 1/154.8
- 設定3: 1/151.0
- 設定4: 1/141.4
- 設定5: 1/138.1
- 設定6: 1/133.2
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- canonical: 約35.8G/50枚（設定1掲載値）
- 後年単一DBに34.0G/50枚表記あり。主要解析複数が35.8Gで一致するため35.8Gをcanonicalとし、34.0GはCONFLICT_LATE_DATABASEとして保持。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- ART「コーラリアンモード」: 約1.0枚/G
信頼度: OFFICIAL/INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- 黒BAR BIG: 約220枚、成立時点でART濃厚。
- 赤7 BIG: 約220枚、ART期待度50%以上。
- 白7 BIG: 約170枚、ART期待度50%以上。
- REG: 約35枚。押し順当て5回中3回以上正解でART濃厚。
- ART「コーラリアンモード」: 1セット50G、純増約1.0枚/G、セットストック型。
- 「HI-EVO MODE」: ARTストック特化区間。公開資料で平均ストック約5.3セット。
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はリアルボーナス、レア小役直撃、押し順当て「ねだるな勝ち取れ」等からARTを目指すA+ART構造。
- 天井機能は非搭載。ゲーム数天井・ボーナス間天井・ART間天井として固定される救済G数はない。
- ボーナス/ART終了後はARTストック潜伏があり得るため、終了直後の通常転落だけでART否定とはならない。
- 有利区間リセット契機は設定変更時、ボーナスまたはART終了時の一部、エンディング終了時。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間をRESET。
- 内部状態をRESET / 再抽選。
- RT状態はRT0へRESET。
- 朝一表示ステージは談話室ステージ。
- 有利区間リセット時は高確移行抽選が行われ、設定変更時も同じ抽選対象。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きは有利区間をCARRY_OVER。
- 内部状態をCARRY_OVER。
- 営業上の据え置きで純電源OFF→ONを伴う場合、機種固有比較表では内部状態・RT状態を引き継ぐ。
- 表示ステージは電源OFF→ONでも談話室ステージとなるため、朝一ステージ単独では設定変更/据え置き判別不可。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは内部状態をCARRY_OVER。
- RT状態をCARRY_OVER。
- 開始ステージは談話室ステージ。
- 有利区間について、据え置き比較ではCARRY_OVERを確認できるが、「純電断のみ」を独立条件として有利区間そのものまで明記した複数高信頼資料は確認できなかったため、有利区間単独契約は据え置き挙動からの一般化を避けて扱う。
信頼度: ANALYSIS_HIGH（状態/RT） / UNVERIFIED（純電断単独の有利区間明記）

### gameCounterReset
- 天井非搭載のため、朝一天井狙いに用いるゲーム数カウンタ契約は NOT_APPLICABLE。
- ボーナス/ART潜伏や内部状態は別概念であり、天井ゲーム数として扱わない。
信頼度: ANALYSIS_HIGH

### ceilingAfterReset
- 通常時天井: 非搭載。
- 設定変更後専用の短縮天井: なし / NOT_APPLICABLE。
- 一部基本スペックページに「天井 搭載」とする見出し表記がある一方、同媒体の天井&設定変更専用ページは到達条件・恩恵とも「ナシ」、他の主要解析も非搭載で一致するため、専用ページと複数一致資料をcanonicalとする。
信頼度: ANALYSIS_HIGH / CONFLICT_SOURCE_METADATA

### modeAfterReset
- 本機は朝一用の規定G数モードを主要ゲーム性とする機種ではない。
- 設定変更時は有利区間リセットに伴い内部状態を再抽選し、高確移行抽選を実施。
- 据え置き / 電源OFF→ONでは内部状態を引き継ぐ。
- 設定変更専用の「モードA/B」等の公開振り分けは NOT_APPLICABLE / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH

### stateAfterReset
- 設定変更 / 有利区間リセット時の高確移行率:
  - 設定1: 39.8%
  - 設定2: 42.2%
  - 設定3: 43.0%
  - 設定4: 44.9%
  - 設定5: 46.9%
  - 設定6: 50.0%
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: 有利区間CARRY_OVER。
- その他の有利区間リセット契機: ボーナスまたはART終了時の一部、エンディング終了時。
- 純電源OFF→ON単独条件について、有利区間そのものを直接明記する機種固有高信頼資料は今回固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH（設定変更/据え置き） / UNVERIFIED（純電断単独）

### resetBenefits
- 設定変更時は39.8〜50.0%で高確スタート。高設定ほど高確移行率が上昇する。
- 当日1回目のBIG終了画面に設定変更濃厚パターンが存在し、客側の変更判別材料になる。
- HI-EVOレントンは設定変更濃厚、HI-EVO全員集合は設定変更濃厚 + 設定3以上濃厚。
信頼度: ANALYSIS_HIGH

### resetPenalties
- 据え置き時に保持される内部状態/RT状態は設定変更で失われ、RT0・内部状態再抽選となる。
- 天井非搭載のため、設定変更による宵越し天井消去という不利は NOT_APPLICABLE。
- 設定変更固有の追加的な公開数値ペナルティは PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED（追加数値）

### resetDetection
- 朝一ステージは設定変更でも電源OFF→ONでも談話室ステージのため、開始ステージ単独では判別不可。
- 当日1回目BIG終了画面のHI-EVOレントン出現は設定変更濃厚。
- 当日1回目BIG終了画面のHI-EVO全員集合は設定変更濃厚 + 設定3以上濃厚。
- 当日1回目BIG終了画面の変更判別画面は、当選までのG数が深いほど出現率が優遇されるが、比較可能な全G数帯別出現率は今回の物差し用途では収集しない。
- 本機固有のリールガックン条件・発生率は、「エウレカセブン TYPE-ART / S エウレカセブンHIEVO XS / タイヨーエレック / Sammy / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」等で再探索したが高信頼な機種固有固定値を確認できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED（ガックン）

### numericResetData
- 設定変更 / 有利区間リセット時の高確移行率:
  - 設定1: 39.8%
  - 設定2: 42.2%
  - 設定3: 43.0%
  - 設定4: 44.9%
  - 設定5: 46.9%
  - 設定6: 50.0%
- 通常天井: なし。
- 設定変更後短縮天井: なし。

### publicMorningNumbers
- 朝一高確スタート率: 設定1 39.8% / 設定2 42.2% / 設定3 43.0% / 設定4 44.9% / 設定5 46.9% / 設定6 50.0%。
- 設定変更専用のゲーム数天井・短縮天井は非搭載。
- 当日1回目BIG終了画面に設定変更濃厚パターンあり（HI-EVOレントン / HI-EVO全員集合）。

## conflicts
- baseGamesPer50: 主要解析・パチマガ系・攻略資料は約35.8G/50枚で一致。一部後年DBに34.0G/50枚があり CONFLICT_LATE_DATABASE。35.8Gをcanonical。
- ceiling metadata: 必勝本の基本スペックページ見出し部に「天井 搭載」とする表記があるが、同媒体の専用「天井&設定変更」ページでは到達条件/恩恵とも「ナシ」。パチマガ・複数解析も非搭載で一致するため「天井なし」をcanonical、見出し表記をCONFLICT_SOURCE_METADATAとして保持。
- 後年単一DBにはボーナス確率・ART初当り・機械割に主要解析と異なる数値セットが存在するため、当時業界記事 + 複数主要解析一致値をcanonicalとし平均化しない。

## missingFields
- 純電源OFF→ON単独条件における有利区間そのものの直接明記: UNVERIFIED_AFTER_RESEARCH。
- 本機固有リールガックン条件 / 発生率: UNVERIFIED_AFTER_RESEARCH。
- 設定変更固有の追加ペナルティ数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## sources
取得日: 2026-09-13
- サミー発売発表・業界記事 / 製造元・型式・仕様・ボーナス/初当り: https://news.p-world.co.jp/articles/25220/nippon
- サミー発売発表記事 / 2023年11月上旬導入: https://news.p-world.co.jp/articles/25130/nippon
- HAZUSE / 型式・検定番号330002・導入日・完全攻略機械割: https://hazuse.com/machine/pachislot/SX0052/
- パチマガスロマガ / ベース35.8G・天井なし・ART純増・完全攻略機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/207/kh01.php
- P-WORLD機種DB / ボーナス獲得枚数・ART基本性能: https://www.p-world.co.jp/machine/database/9897
- なな徹 / 朝一・設定変更・据え置き・有利区間・高確移行率・変更判別: https://nana-press.com/kaiseki/machine/634/17391/
- 必勝本 / 天井なし、設定変更時状態再抽選、RT0、電源OFF/ON引継ぎ、朝一談話室: https://p.hisshobon.jp/machine/4160/1/97370
- ちょんぼりすた / ボーナス・ART初当り・市場想定/完全攻略機械割・ベース・天井なし: https://chonborista.com/slot/sammy-slot/196161/
- パチビー / ボーナス獲得枚数・ART性能・市場想定/完全攻略機械割: https://www.pachibee.jp/machines/index/223100004
- 検定通過記事 / 型式・製造元: https://ativo.jp/2023/07/18/%E3%83%BBs-%E3%82%A8%E3%82%A6%E3%83%AC%E3%82%AB%E3%82%BB%E3%83%96%E3%83%B3hievo-xs-%E3%81%8C%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E3%80%802023-7-18/

coreStatus: COMPLETE_CORE
