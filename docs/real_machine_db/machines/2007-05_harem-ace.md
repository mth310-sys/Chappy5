# もえろ!ハーレムエース

status: PARTIAL
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

machineName: もえろ!ハーレムエース
aliases:
- ハーレムエース
manufacturer: ネット
releaseDate: 2007-05（5号機クロニクル、けんのスロットシミュレーション。日単位の実納品/ホール導入日は今回未確定）
generation: 5号機初期
systemType: ボーナス主体 / 4段階設定（1・3・5・7）

## 性能コア

payoutRateBySetting:
- K-Navi
  - 設定1: 98.0%
  - 設定3: 101.4%
  - 設定5: 106.3%
  - 設定7: 112.4%
- 5号機クロニクル
  - 設定1: 98.4%
  - 設定3: 102.4%
  - 設定5: 108.0%
  - 設定7相当欄: 115.2%（同ページ表記は設定6だが、本機は別資料で1/3/5/7の4段階設定確認。設定番号表記の不整合を含むためCONFLICT扱い）

confidence: CONFLICT

note:
- K-Naviは本機を設定1/3/5/7の4段階として掲載。
- 5号機クロニクルは同機欄で1/3/5/6表記になっており、最高設定番号と機械割がK-Naviと一致しない。平均化しない。

initialHitBySetting:
- BIG
  - 設定1: 1/299
  - 設定3: 1/276
  - 設定5: 1/258
  - 設定7: 1/240
- SAKURA BONUS
  - 設定1: 1/595
  - 設定3: 1/550
  - 設定5: 1/512
  - 設定7: 1/451
- ボーナス合算
  - 設定1: 1/199
  - 設定3: 1/184
  - 設定5: 1/171
  - 設定7: 1/154

confidence: ANALYSIS_HIGH（K-Navi）

baseGamesPer50:
- UNVERIFIED
- 「もえろ!ハーレムエース / ハーレムエース / NET / 1000円 / 50枚 / ベース / コイン持ち」を組み替え、攻略サイト・後年DB・保存系資料まで再探索したが、比較可能な通常時ベースを今回確定できなかった。

netIncrease:
- CONFLICT / UNVERIFIED
- 5号機クロニクルは100G RT「ハーレムタイム」、純増約0.6枚/Gと説明。
- けんのスロットシミュレーションも本機を5号機 / RTとして分類しており、RT搭載自体は後年独立資料でも補助確認できた。
- ただし今回取得できた当時高信頼資料だけではRT純増・突入契約の完全照合に至らないため、従来どおり性能コアのCONFLICT/UNVERIFIED判定は崩さない。

basicPayout:
- BIG: 345枚を超える払い出しで終了
- SAKURA BONUS: 224枚を超える払い出しで終了
- 実獲得目安については5号機クロニクルがBIG約250枚 / REG約104枚とするが、K-Naviは払い出し終了条件までの確認のため、定義を分けて保持。

confidence: ANALYSIS_HIGH（K-Navi） / ANALYSIS_SINGLE（5号機クロニクル実獲得目安）

modeSpecificMinimumData:
- 設定は1・3・5・7の4段階（K-Navi、777TOWNの実機アプリ説明でも4段階を確認）。
- BIGとSAKURA BONUSの2系統を主軸に出玉を増やす。
- 5号機クロニクルはRT機能付きとし、けんのスロットシミュレーションもRT機として分類。ただし当時高信頼資料による詳細照合不足のためRT詳細はCONFLICT/UNVERIFIED扱いを維持。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetBehaviorRetrievedAt: 2026-09-12
resetBehaviorConfidence: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

settingChangeBehavior:
- 本機固有の設定変更時ゲーム数、成立済みボーナス、RT/チャンスゾーン残状態の処理を明記した直接資料は、表記揺れ・メーカー名・朝一・設定変更・リセット・据え置き・電断・ガックンを組み替えて再探索しても固定できずUNVERIFIED_AFTER_RESEARCH。
- 通常時ゲーム数天井を主要仕様として確認できないため、ホール経営上の通常天井リセット狙い要素はNONE_CONFIRMED。

carryOverBehavior:
- 据え置き時に引き継ぐ通常時ゲーム数天井・通常モード・ATストック等はNONE_CONFIRMED。
- RT搭載自体は後年資料で補助確認できるが、RT「ハーレムタイム」中の残G数やチャンスゾーン状態を据え置きで引き継ぐかは本機固有の直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。

powerCycleBehavior:
- 電源OFF→ONのみで朝一専用恩恵・短縮天井が発生する根拠はNONE_CONFIRMED。
- 成立済みボーナス、RT/チャンスゾーン残状態の純電断時処理はUNVERIFIED_AFTER_RESEARCH。
- 一般的な5号機RT/ボーナス機の電断挙動から補完しない。

gameCounterReset:
- 通常時ゲーム数天井はNONE_CONFIRMED / NOT_APPLICABLE相当。
- 設定変更時に追うべき公開天井ゲーム数は確認されない。

ceilingAfterReset:
- NONE_CONFIRMED_AFTER_RESEARCH。

modeAfterReset:
- 朝一専用モード、設定変更時モード再抽選はNONE_CONFIRMED_AFTER_RESEARCH。

stateAfterReset:
- 設定変更時の内部状態再抽選について本機固有の高信頼資料を確認できずUNVERIFIED_AFTER_RESEARCH。
- RT/チャンスゾーンの設定変更・据え置き・純電断時状態処理もUNVERIFIED_AFTER_RESEARCH。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更専用の短縮天井・モード優遇・初当たり優遇はNONE_CONFIRMED_AFTER_RESEARCH。

resetPenalties:
- NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection:
- 「もえろ!ハーレムエース / ハーレムエース / ネット」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」を組み合わせて再探索したが、本機固有の高信頼な変更判別情報は確認できずUNVERIFIED_AFTER_RESEARCH。
- 後継2025年「翔べ！ハーレムエース」の情報は別機種のため除外。

numericResetData:
- 設定変更時モード振り分け: NONE_CONFIRMED_AFTER_RESEARCH
- 短縮天井: NONE_CONFIRMED_AFTER_RESEARCH
- 朝一当選率/恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

## sources

初回取得日: 2026-08-31
resetBehavior再取得日: 2026-09-12

1. K-Navi — もえろ!ハーレムエース
   - https://p-kn.com/slot/580/
   - 設定1/3/5/7のBIG、SAKURA BONUS、合算、機械割、各ボーナスの払い出し終了条件を確認。
   - reliability: ANALYSIS_HIGH

2. K-Navi — もえろ!ハーレムエース 機械割
   - https://p-kn.com/slot/580/3488/
   - 設定1/3/5/7の機械割98.0/101.4/106.3/112.4%を再確認。
   - reliability: ANALYSIS_HIGH

3. 5号機クロニクル — ネット5号機全機種一覧
   - https://5goki.com/net
   - 2007年5月、機械割98.4/102.4/108.0/115.2%、BIG約250枚/REG約104枚、100G RT「ハーレムタイム」との記述を確認。ただし設定番号表記・RT詳細は他資料照合不足のためCONFLICT資料として保持。
   - reliability: ANALYSIS_SINGLE

4. けんのスロットシミュレーション — もえろ!ハーレムエース
   - https://kenslo65536.com/sp/model/harlem-ace.html
   - 2007年05月導入、5号機/RT、BIG345枚超/REG224枚超終了、設定1/3/5/7を確認。
   - reliability: ANALYSIS_SINGLE

5. 777TOWN — ハーレムエース
   - https://www.777town.net/explanation/slot_haremace.jsp
   - 2007年発売、実機設定が1/3/5/7の4段階であることをアプリ説明から補助確認。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 日単位の実納品/ホール導入日
- 50枚あたりゲーム数 / 1000円ベース
- RT/CZ「ハーレムタイム/ハーレムチャンス」の当時高信頼資料による純増・ゲーム数・突入契約の再照合
- 設定変更/据え置き/電源OFF→ON時の成立済みボーナス・RT/CZ残状態処理
- 本機固有の設定変更判別（ガックン等）

## conflicts

- 設定別機械割:
  - K-Navi: 設定1/3/5/7 = 98.0 / 101.4 / 106.3 / 112.4%
  - 5号機クロニクル: 98.4 / 102.4 / 108.0 / 115.2%（同ページの最高設定番号表記は6）
  - 平均化しない。
- RT仕様:
  - 5号機クロニクルは100G RT・純増約0.6枚/Gを記載。
  - けんのスロットシミュレーションはRT機と分類。
  - 当時高信頼資料による詳細再照合が不足するため、性能コアの既存CONFLICT/UNVERIFIED判定を維持。

## QA note

- 2026-09-12 resetBehavior遡及QA: 既存性能コア `PARTIAL` は維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` に正式化。
- 検索語を「もえろ!ハーレムエース」「ハーレムエース」「NET/ネット」「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「電断」「ガックン」「RT」「ハーレムタイム」「ハーレムチャンス」へ切り替え、当時攻略、後年DB、シミュレータ、実機アプリ系を再探索。
- 後継2025年「翔べ！ハーレムエース」の朝一/設定変更情報は別機種として除外。
- 設定変更/据え置き/純電断時の成立済みボーナス・RT/CZ残状態、本機固有ガックン等の直接契約は固定できず、一般的5号機挙動から推測補完していない。
